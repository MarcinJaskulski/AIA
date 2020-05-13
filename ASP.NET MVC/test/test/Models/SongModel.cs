using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace test.Models
{
    public class SongModel
    {
        [Required]
        int Id { get; set; }

        string Name { get; set; }
        string Artist { get; set; }
        string Genre { get; set; }
    }
}
