using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Automation.Model.Response
{

    public class ListOfUsersRes
    {
        public int page { get; set; }
        public int per_page { get; set; }
        public int total { get; set; }
        public int total_pages { get; set; }
        public Data[] data { get; set; }
        public Support support { get; set; }
    }    
}
