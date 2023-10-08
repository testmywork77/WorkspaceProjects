using API.Automation;
using API.Automation.Model.Request;
using API.Automation.Model.Response;
using API.Automation.Utility;
using RestSharp;
using System.Net;
using TechTalk.SpecFlow;

namespace Tests
{
    [Binding]
    public class CreateUserStepDefinitions
    {
        private CreateUserReq createUserReq;
        private RestResponse restResponse;
        private ScenarioContext scenarioContext;
        private HttpStatusCode statusCode;
        private APIClient api;

        public CreateUserStepDefinitions(CreateUserReq createUserReq, ScenarioContext sceanrioContext)
        {
            this.createUserReq = createUserReq;
            this.scenarioContext = sceanrioContext;
            api = new APIClient();
        }

        [Given(@"user with name ""([^""]*)""")]
        public void GivenUserWithName(string name)
        {          
            createUserReq.name = name;
        }

        [Given(@"user with job ""([^""]*)""")]
        public void GivenUserWithJob(string job)
        {            
            createUserReq.job = job;
        }

        [Given(@"provide valid user payload ""([^""]*)""")]
        public void GivenProvideValidUserPayload(string fileName)
        {
            string file = HandleContent.GetFilePath(fileName);
            var requestPayload = HandleContent.ParseJSON<CreateUserReq>(file);
            scenarioContext.Add("reqPayload", requestPayload);
        }


        [When(@"send request to create user")]
        public async Task WhenSendRequestToCreateUser()
        {
            //createUserReq = scenarioContext.Get<CreateUserReq>("reqPayload");
            restResponse = await api.CreateUser<CreateUserReq>(createUserReq);
        }

        [Then(@"validate user is created")]
        public void ThenValidateUserIsCreated()
        {
            statusCode = restResponse.StatusCode;
            var code = (int)statusCode;
            Assert.That(code, Is.EqualTo(201));

            var content = HandleContent.GetContent<CreateUserRes>(restResponse);
            Assert.That(createUserReq.name, Is.EqualTo(content.name));
            Assert.That(createUserReq.job, Is.EqualTo(content.job));
        }
    }
}
