using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication.Models
{
    public class SongModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required!")]
        [StringLength(100, ErrorMessage = "Maximal length of thename of a song is 100 characters!")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Artist is required!")]
        [StringLength(100, ErrorMessage = "Maximal length of thename of a song is 100 characters!")]
        public string Artist { get; set; }
        public int GenreId { get; set; }
    }
}