using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    public class SongsController : Controller
    {
        private MusicDbContext db = new MusicDbContext();

        // GET: Songs
        public ActionResult Index()
        {
            if (Request.IsAjaxRequest())
                return PartialView("_SongsList", db.Songs.ToList());
            else
                return View(db.Songs.ToList());
        }

        //// GET: Songs/Details/5
        //public ActionResult Details(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    SongModel songModel = db.Songs.Find(id);
        //    if (songModel == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(songModel);
        //}

        // GET: Songs/Create
        public ActionResult Create()
        {
            ViewBag.Genres = db.Genres.ToList();
            return View();
        }

        // POST: Songs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name,Artist,GenreId")] SongModel songModel)
        {
            if (ModelState.IsValid)
            {
                db.Songs.Add(songModel);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(songModel);
        }

        // GET: Songs/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SongModel songModel = db.Songs.Find(id);
            if (songModel == null)
            {
                return HttpNotFound();
            }

            ViewBag.Genres = db.Genres.ToList();

            return View(songModel);
        }

        // POST: Songs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name,Artist,GenreId")] SongModel songModel)
        {
            if (ModelState.IsValid)
            {
                db.Entry(songModel).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(songModel);
        }

        //// GET: Songs/Delete/5
        //public ActionResult Delete(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    SongModel songModel = db.Songs.Find(id);
        //    if (songModel == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(songModel);
        //}

        // DELETE: Songs/Delete/5
        [HttpDelete, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        public ActionResult Delete(int id)
        {
            SongModel songModel = db.Songs.Find(id);
            db.Songs.Remove(songModel);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
