using Movie_Cs.Filters;
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

    
   
    public class OrdersController : ApiController
    {
        YmdbEntities Ymdb = new YmdbEntities();

        // GET: api/Orders

        public IEnumerable<MovieOrder> Get()
        {
            return Ymdb.MovieOrders.ToList();
        }

        // GET: api/Orders/5
        public MovieOrder Get(int id)
        {
            return Ymdb.MovieOrders.FirstOrDefault(s => s.OrderId == id);
        }


        [ClassValid]
        // POST: api/Orders
        public void Post([FromBody]MovieOrder b1)
        { 
            Ymdb.MovieOrders.Add(b1);
            Ymdb.SaveChanges();
        }




        // PUT: api/Orders/5
        public void Put(int id, [FromBody]string Movie_Name,int NumOftickets, DateTime date, TimeSpan time, string username, string password)
        {
            MovieOrder m = Ymdb.MovieOrders.FirstOrDefault(m1 => m1.OrderId == id);
            if (m != null)
            {
                m.MovieName = Movie_Name + "gggg";
                m.NumOftickets = NumOftickets;
                m.Date = date;
                m.Time = time;
                m.UserName = username;
                m.Password = password;
                Ymdb.SaveChanges();

            }
        }



        // DELETE: api/Orders/5
        public void Delete(int id)
        {
            MovieOrder m = Ymdb.MovieOrders.FirstOrDefault(m1 => m1.OrderId == id);
            if (m != null)
            {
                Ymdb.MovieOrders.Remove(m);
                Ymdb.SaveChanges();

            }

        }

    }
}
