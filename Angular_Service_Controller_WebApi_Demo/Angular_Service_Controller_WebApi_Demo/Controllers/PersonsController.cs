using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular_Service_Controller_WebApi_Demo.Controllers
{
    public class PersonsController : ApiController
    {
        public IEnumerable<Person> Get()
        {
            List<Person> persons = new List<Person>();

            persons.Add(new Person() { Name = "Helmy" });
            persons.Add(new Person() { Name = "Helmy2" });

            return persons;
        }
    }

    public class Person
    {
        public string Name { get; set; }
    }
}
