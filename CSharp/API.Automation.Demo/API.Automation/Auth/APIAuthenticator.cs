using API.Automation.Model.Response;
using RestSharp;
using RestSharp.Authenticators;

namespace API.Automation.Auth
{
    public class APIAuthenticator : AuthenticatorBase
    {

        // To generate Bearer taokem, need ClientId, ClientSecreat
        readonly string baseUrl;
        readonly string clientId;
        readonly string clientSecret;

        public APIAuthenticator() : base("") { }

        protected override async ValueTask<Parameter> GetAuthenticationParameter(string accessToken)
        {
            var token = string.IsNullOrEmpty(Token) ? await GetToken() : Token;
            return new HeaderParameter(KnownHeaders.Authorization, token);
        }

        private async Task<string> GetToken()
        {
            var options = new RestClientOptions(baseUrl)
            {
                Authenticator = new HttpBasicAuthenticator(clientId, clientSecret)
            };

            var client = new RestClient(options);

            var request = new RestRequest("oauth2/token")
                .AddParameter("grant_type", "client_credentials");

            var response = await client.PostAsync<TokenResponse>(request);

            return $"{response.TokenType} {response.AccessToken}";

        }
    }
}
