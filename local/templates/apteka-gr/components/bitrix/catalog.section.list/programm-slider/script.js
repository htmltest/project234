class ModalsCreat {
    constructor(params) {
        this.docum = params.docum;
        this.id = params.ID;
        this.name = params.NAME;
        this.time = params.TIME;
        this.halls = params.HALLS;
        this.text = params.Description;
        this.name1 = params.NAME1;
        this.name2 = params.NAME2;
        this.spikersname = params.SPICERSNAME;
        this.speaker_spost = params.SPEAKER_POST;
        this.slider = params.SLIDER;
        this.$activity = params.$activity;

    }

    drowModals() {

        let slide = ``;
        let slidem = ``;
        let titlespikers = ``;
        let titlemoderat = ``;
        let textcontacts = '';
        this.id.forEach((element, index) => {
            if (this.text[index]['TEXT'] != undefined) {
                textcontacts = this.text[index]['TEXT']
            }
            else {
                textcontacts = "отсутствует описание";
            }

            if (this.slider[index]) {
                titlespikers = `<h2 class="title2 title2--modal-spikers">Спикеры:</h2>`;
                this.slider[index].forEach((element, ind) => {
                    if (this.$activity[index][ind] == "модератор") {
                        slide += `
                        <div class="images-description images-description--slider-list" >
                            <span class="images-description-img  moderator"><img src="${element}" alt=""></span>
                            <span class="images-description-text">
                                <p>${this.spikersname[index][ind]}</p>
                                <p>${this.$activity[index][ind]}</p>
								<p style="font-style: italic">${this.speaker_spost[index][ind]}</p>
                            </span>
                        </div>
                        `;
                    } else {
                        slide += `
                        <div class="images-description images-description--slider-list" >
                            <span class="images-description-img  spiker"><img src="${element}" alt=""></span>
                            <span class="images-description-text">
                                <p>${this.spikersname[index][ind]}</p>
                                <p>${this.$activity[index][ind]}</p>
								<p style="font-style: italic">${this.speaker_spost[index][ind]}</p>
                            </span>
                        </div>
                        `;
                    }

                });

            } else {
                titlespikers = ``;
                slide = ``;
            }

            let modals = document.createElement("div");
            modals.classList.add('modal-detals');
            modals.style.display = 'none';
            modals.classList.add('modal-detals--close');
            modals.id = `${element}modal`;
            let button = document.createElement("button");
            button.classList.add('btn--close');
            button.classList.add('modal-detals--btn--close');

            let wrap = document.createElement("div");
            wrap.classList.add('wrap');

            modals.append(wrap);
            wrap.innerHTML = `
            <div class="content-modal-detals ">
                <div class="header">
                <div class="section-detals">
                <div class="program--name-nomber-cat">
                    <div class="nomber-box-cat">
                        <span class="nomber-cat">${this.name1[index]}</span>
                        <span class="month-cat">${this.name2[index]}</span>
                    </div>
                </div>
             </div>
                <div class="contacts-detals">
                    <div class="description description-detals">
                            <h1 class="title">${this.halls[index]}</h1>
                            <h2 class="title2">${this.time[index]}</h2>
                            <h5 class="title5">${this.name[index]}</h5>
                    </div>
             </div>
                </div>
                <div class="slider-phot">
                     ${slide}    
                </div>
            <div class="description">
            ${this.text[index]} 
            </div>
            <div class="clear"></div>
            </div>`;

            this.docum.append(modals);
            slide = ``;
            slidem = ``;
        });
    }
}

arElements = function (arParams) {
    if (typeof arParams === 'object') {
        this.arParams = arParams;

        const params = {
            docum: document.querySelector('body'),
            ID: this.arParams.ID,
            NAME: this.arParams.NAME,
            TIME: this.arParams.TIME,
            HALLS: this.arParams.HALLS,
            Description: this.arParams.Description,
            NAME1: this.arParams.SECTION_NAME1,
            NAME2: this.arParams.SECTION_NAME2,
            SPICERSNAME: this.arParams.SPICERS_NAME,
            SPEAKER_POST: this.arParams.POSTS,
            SLIDER: this.arParams.SLIDER,
            $activity: this.arParams.$activity,
        }
        let modalsProgr = new ModalsCreat(params);
        modalsProgr.drowModals();
    }
};