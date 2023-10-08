using Newtonsoft.Json;
using RestSharp;

namespace API.Automation.Utility
{
    public class HandleContent
    {
        public static T GetContent<T> (RestResponse response)
        {
            var content = response.Content;
            //Deserize the Json to the specified .NET Type
            return JsonConvert.DeserializeObject<T> (content);
        }

        public static T ParseJSON<T>(String file)
        {
            return JsonConvert.DeserializeObject<T>(File.ReadAllText(file));
        }

        public static string GetFilePath(string name)
        {
            //string path = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, name));
            string path = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory));
            path = string.Format(path + "TestData\\{0}", name);
            return path;
        }

    }
}
