using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Movie_Cs.Controllers
{
    [EnableCors(origins: "*", methods: "*", headers: "*")]
    public class RegisterController : ApiController
    {

        YmdbEntities Ymdb = new YmdbEntities();

        // GET: api/Register

        public IEnumerable<UserTable> Get()
        {
            return Ymdb.UserTables.ToList();
        }


        // GET: api/Register/5
        public UserTable Get(int id)
        {
            return Ymdb.UserTables.FirstOrDefault(s => s.User_Id == id);
        }


        // POST: api/Register
        public void Post([FromBody]UserTable b1)
        {
            Ymdb.UserTables.Add(b1);
            Ymdb.SaveChanges();
        }


        // PUT: api/Register/5
        public void Put(int id, [FromBody]string First_Name, string Last_Name, string Credit_card, string T_Z, string username, string password)
        {
            UserTable m = Ymdb.UserTables.FirstOrDefault(m1 => m1.User_Id == id);
            if (m != null)
            {
                m.First_Name = First_Name;
                m.Last_Name = Last_Name;
                m.Credit_Card = Credit_card;
                m.T_Z = T_Z;
                m.User_Name = username;
                m.Password = password;             
                Ymdb.SaveChanges();
            }
        }

       
        // DELETE: api/Register/5
        public void Delete(int id)
        {
            UserTable m = Ymdb.UserTables.FirstOrDefault(m1 => m1.User_Id == id);
            if (m != null)
            {
                Ymdb.UserTables.Remove(m);
                Ymdb.SaveChanges();

            }

        }
    }
}
