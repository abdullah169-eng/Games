// Display Details
export class Details {
  constructor(title, genre, platform, status, desc, gUrl, thumbnail) {
    this.title = title;
    this.genre = genre;
    this.platform = platform;
    this.status = status;
    this.desc = desc;
    this.gUrl = gUrl;
    this.thumbnail = thumbnail;
  }
  displayDetail() {
    document.getElementById("myDetail").innerHTML = `<article class="col-md-4">
            <img class="w-100" src="${this.thumbnail}" alt="game-img" />
          </article>
          <article class="col-md-8 text-white">
            <h3>Title: ${this.title}</h3>
            <p>Category: <span class="badge text-bg-info"> ${this.genre}</span></p>
            <p>Platform: <span class="badge text-bg-info"> ${this.platform}</span></p>
            <p>Status: <span class="badge text-bg-info"> ${this.status}</span></p>
            <p class="small">${this.desc}</p>
            <a href="${this.gUrl}" class="btn btn-outline-warning text-white mb-3" target="_blank">
              Show Game
            </a>
          </article>`;
  }
}
