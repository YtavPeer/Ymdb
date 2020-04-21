using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.IO;

namespace Movie_Cs.Controllers
{
    [EnableCors(origins:"*",methods:"*",headers:"*")]
    public class MovieController : ApiController
    {
        YmdbEntities Ymdb = new YmdbEntities();

        // GET: api/Movie
        public IEnumerable<Movie> Get()
        {
           
            return Ymdb.Movies.ToList();
        }

        // GET: api/Movie/5
        public Movie Get(int id)
        {
            return Ymdb.Movies.FirstOrDefault(s => s.Movie_Id == id);
        }

        // POST: api/Movie
        public void Post([FromBody]Movie m1)
        {
           


            m1.Data_Image = Convert.FromBase64String(m1.Movie_Image_Name);
         



            Ymdb.Movies.Add(m1);
            Ymdb.SaveChanges();
        }







        //// POST: api/Movie with bool Variable for Authentication
        //public void Post([FromBody]bool value)
        //{

        //}

        // PUT: api/Movie/5
        public void Put(int id, [FromBody]string Movie_Name, string Movie_Director, string Movie_Description)
        {
            Movie m = Ymdb.Movies.FirstOrDefault(m1 => m1.Movie_Id == id);
            if(m != null)
            {
                m.Movie_Name = Movie_Name+"gggg";
                m.Movie_Director = Movie_Director+"gggg";
                m.Movie_Description = Movie_Description+"gggg";
                Ymdb.SaveChanges();

            }
        }

        // DELETE: api/Movie/5
        public void Delete(int id)
        {
            Movie m = Ymdb.Movies.FirstOrDefault(m1 => m1.Movie_Id == id);
            if (m != null)
            {
                Ymdb.Movies.Remove(m);
                Ymdb.SaveChanges();

            }

        }
    }
}
