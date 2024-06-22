// Display Games
let cartona = "";
export function setCartona(value) {
  cartona = value;
}
export class Games {
  constructor(id, title, platform, thumbnail, desc, genre) {
    this.id = id;
    this.title = title;
    this.platform = platform;
    this.thumbnail = thumbnail;
    this.desc = desc;
    this.genre = genre;
  }
  displayGames() {
    cartona += `<article class="col-xl-3 col-lg-4 col-md-6 game position-relative">
    <div id="${this.id}" class="position-absolute bottom-0 top-0 start-0 end-0 bg-transparent w-100 h-100 z-3"></div>
      <section
        class="text-white border border-1 border-black border-opacity-25 rounded-2 overflow-hidden h-100 position-relative"
      >
        <article class="p-2 mb-5">
          <img
            class="w-100 rounded-top-3 object-fit-cover"
            src="${this.thumbnail}"
            alt="game-img"
          />
          <div
            class="d-flex justify-content-between align-items-baseline my-2"
          >
            <h6>${this.title}</h6>
            <span class="text-bg-primary px-2 py-1 rounded-2">Free</span>
          </div>
          <p class="desc text-center text-white-50 pt-3">
          ${this.desc}
          </p>
        </article>
        <div
          class=" position-absolute bottom-0 w-100 d-flex justify-content-between p-2 border border-1 border-black border-opacity-25"
        >
          <span class="bg-gray px-2 rounded-2 fw-bold">${this.genre}</span>
          <span class="bg-gray px-2 rounded-2 fw-bold">${this.platform}</span>
        </div>
      </section>
    </article>`;
    document.getElementById("myRow").innerHTML = cartona;
  }
}
