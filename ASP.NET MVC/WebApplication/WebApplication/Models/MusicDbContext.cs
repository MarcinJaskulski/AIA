using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication.Models
{
    public class MusicDbContext : DbContext
    {
        public DbSet<SongModel> Songs { get; set; }

        public System.Data.Entity.DbSet<WebApplication.Models.GenreModel> Genres { get; set; }
    }
}