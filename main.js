const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app_wrap = $('.app');
const themeWrap = $('.themes');
const iconSetting = $('.header__navbar-ic-setting');
const menuSetting = $('.header__navbar-item-setting');
const searchHistory = $('.header__search-history-list')
const iconThemeOpen = $('.header__navbar-ic-themes');
const iconThemeClose = $('.themes__container-header-close');
const themeContainerBody = $('.themes__container-body');
const themeContainer = $('.themes__container');
const playMusicList = $('.content__playmusic-list');
const playList = $('.content__playlist-body');
const albumList = $('.content__album-body');
const mvList = $('.content__mv-body');
const artistList = $('.content__artist-body');
const contentWrap = $('.content__wrap');
const tabHome = $('.tab__home');
const contentTab = $$('.content__tab')
const icNextItems = $$('.item_next');
const icPrevItems = $$('.item_prev');
const menuItems = $$('.content__menu-list .content__menu-item');
const navbarSubnav = $$('.navbar__subnav-list > .subnav__ỉtem');
const toastWrap = $('.toast');
const contentMenuSong = $('.content__playmusic-list-menu');
const contentMenuPlaylist = $('.content__playlist-body-menu');
const contentMenuAlbum = $('.content__album-body-menu');
const contentMenuMv = $('.content__mv-body-menu');
const contentMenuArtist = $('.content__artist-body-menu');
const contentHeaderLink = $$('.content__header-link-home');
const navbarItems = $$('.navbar__item.navbar__item-main');
const normalPlaylists = $$('.content__tab-item.content__tab-item-normal');
const containerTabs = $$('.container__tab');
const tabZingChartList = $('.content__music-list.tab__zingchart-list');
const tabRadios = $$('.content__music-list.tab__radio-list');
const specialPlaylistItems = $$('.col.special_playlist-item');
const contentRadio = $$('.content.content__radio-wrap');
const followingPostCol = $$('.following__post-col');
const followingSliderList = $('.following__slider-list');
const btnShowZingchart = $('.show__full-zingchart button');
const notBtnShowZingchart = $('.not__show-full-zingchart button');
const btnZingCharts = $$('.btn__zingchart');
const contentSliderBody = $('.content__slider-body.col');
const audio = $("#audio");
const playerContainerSong = $('.player__container .player__container-song');
const playerSongThumb = $('.player__song-thumb');
const titleItems = $$('.title__item');
const titleItem = $('.title__item');
const playerSongAuthor = $('.player__song-author');
const btnPlay = $('.control__btn.row__item-play');
const progessFillSong = $('.progess-fill.progess-fill-song');
const progessFillVolumn = $('.progess-fill.progess-fill-volumn');
const progessTimeSong = $('.progess__time-song');
const progessVolumnSong = $('.progess__volumn-song');
const controlBtnPrev = $('.control__btn.control__btn-prev');
const controlBtnNext = $('.control__btn.control__btn-next');
const controlBtnRandom = $('.control__btn-random');
const controlBtnRepeat = $('.control__btn-repeat');
const playerTitleAnimate = $('.player__title-animate');
const durationTime = $('.durationtime');
const songTitleWrap = $('.player_song-title ');

const THEME_STORAGE = 'THEME'
const PLAYER__STORAGE_KEY = 'PLAYER'

const app = {

  curIndexArraySong: 0,
  indexSong: 0,
  playMusicItems: [],
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  isMoved: false,
  titleItemWidth: titleItem,
  isTitleAnimate: false,
  titleAnimate: {},
  isVolumeMin: false,

  config: JSON.parse(localStorage.getItem(PLAYER__STORAGE_KEY)) || {},

  themeLists: JSON.parse(localStorage.getItem(THEME_LIST_STORAGE_KEY)) || {},
  themes: JSON.parse(localStorage.getItem(THEME_STORAGE_KEY)) || {},
  themeKey: JSON.parse(localStorage.getItem(THEME_STORAGE)) || {},
  fullSongList: JSON.parse(localStorage.getItem(MUSIC_STORAGE_KEY)) || {},
  playList: JSON.parse(localStorage.getItem(PLAYLIST_STORAGE_KEY)) || {},
  albums: JSON.parse(localStorage.getItem(ALBUM_STORAGE_KEY)) || {},
  listMvs: JSON.parse(localStorage.getItem(MV_STORAGE_KEY)) || {},
  listArtist: JSON.parse(localStorage.getItem(ARTIST_STORAGE_KEY)) || {},
  listNormalPlaylist: JSON.parse(localStorage.getItem(NORMAL_PLAYLIST_STORAGE_KEY)) || {},
  listSongCharts: JSON.parse(localStorage.getItem(SONG_CHARTS_STORAGE_KEY)) || {},
  radioItems: JSON.parse(localStorage.getItem(RADIO_STORAGE_KEY)) || {},
  listSpecialPlaylist: JSON.parse(localStorage.getItem(SPECIAL_PLAYLIST_STORAGE_KEY)) || {},
  listSingerSlide: JSON.parse(localStorage.getItem(SINGER_SLIDE_STORAGE_KEY)) || {},
  listPost: JSON.parse(localStorage.getItem(POST_STORAGE_KEY)) || {},
  listExploreSlide: JSON.parse(localStorage.getItem(EXPLORE_SLIDE_STORAGE_KEY)) || {},

  setConfig: function (key, value) {
    this.themeKey[key] = value
    localStorage.setItem(THEME_STORAGE, JSON.stringify(this.themeKey))
  },

  setConfigPlayer: function (key, value) {
    this.config[key] = value
    localStorage.setItem(PLAYER__STORAGE_KEY, JSON.stringify(this.config))
  },

  html([first, ...string], ...values) {
    return values.reduce(
      (acc, curr) => acc.concat(curr, string.shift())
      , [first]
    )
      .join('')
  },

  //Xử lý sự kiện render ra danh sách theme
  renderThemes: function () {
    themeContainerBody.innerHTML = app.html`
             ${this.themeLists.map((themeList, themeIndex) => {
      return app.html`
                <div class="themes__container-item themes__container-topic">
                    <p class="themes__topic-header content__header-link">${themeList.type}</p>
                        ${themeList.themes.map((theme, index) => {
        return app.html`
                            <div class="theme row__column-6 row__item-theme" data-index= "${index}">
                            <div class=" row__item-display row__item-display-theme">
                                <div class="overlay">
                                    <div class="row__item-img-theme row__item-img" style="background: url(${theme.image}) no-repeat center/cover"></div>
                                    <div class="row__item-action-theme">
                                        <div class="row__item-action-apply">
                                            <p class="row__item-action-txt">Áp dụng</p>
                                        </div>
                                        <div class="row__item-action-preview">
                                            <p class="row__item-action-txt">Xem trước</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row__item-inf">
                                <p class="row__item-inf-txt">${theme.name}</p>
                            </div>
                        </div>
                            `
      })}
                    </div>
                `
    })}
        `
  },

  //Render list music home
  renderMusic: function (item, i) {
    item.innerHTML = this.fullSongList[i].map((itemSong, index) => {
      return app.html
        `
            <div class="content__playmusic-item ${index == this.indexSong ? 'active' : ''}" data-index="${index}">
                <div class="content__playmusic-item-about">
                    <img src="${itemSong.image}" alt="" class="content__playmusic-item-img">
                    <div class="arrow-right"></div>
                    <div class="content__playmusic-item-inf">
                        <span class="name">${itemSong.name}</span>
                        <span class="singer">${itemSong.singer.join(', ')}</span>
                    </div>
                </div>
                <div class="content__playmusic-item-ic">
                    <i class="fa-solid fa-microphone icon__micro"></i>
                    <i class="fa-solid fa-heart icon__primary icon__heart"></i>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>
            `
    }).join('')
  },


  //render playlist 
  renderPlaylist: function (item) {
    item.innerHTML += this.playList.map((playListItem, index) => {
      return app.html
        `
            <div class="row__item row__column-5 mb-30 row__item-playlist" data-index="${index}">
                  <div class="row__item-display">
                    <div class="overlay">
                      <div class="row__item-img" style="background: url('${playListItem.image}') no-repeat center/cover"></div>
                      <div class="row__item-action">
                      <div class="row__item-action-ic row__item-heart">
                        <i class="fa-regular fa-heart icon__heart"></i>
                      </div>
                      <div class="row__item-action-ic row__item-play row__item-play-main">
                        <i class="fa-solid fa-play"></i>
                      </div>
                      <div class="row__item-action-ic row__item-dots">
                        <i class="fa-solid fa-ellipsis"></i>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="row__item-inf">
                    <a href="" class="row__item-inf-name">
                        <p>${playListItem.name}</p>
                    </a>
                    <h3>${playListItem.creator}</h3>
                  </div>
                </div>
            `
    }).join('')
  },

  // render album
  renderAlbum: function (item) {
    item.innerHTML = this.albums.map((album) => {
      return app.html`
            <div class="row__item row__column-5 mb-30">
                <div class="row__item-display">
                    <div class="overlay">
                        <div class="row__item-img" style="background: url('${album.image}') no-repeat center/cover"></div>
                    <div class="row__item-action">
                        <div class="row__item-action-ic row__item-heart>
                        <i class="fa-regular fa-heart  icon__heart""></i>
                    </div>
                <div class="row__item-action-ic row__item-play">
                    <i class="fa-solid fa-play"></i>
                </div>
                <div class="row__item-action-ic row__item-dots">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>
          </div>
        </div>
        <div class="row__item-inf">
          <a href="" class="row__item-inf-name">${album.name}</a>
        </div>
      </div>
        `
    }).join('')
  },

  //render mv
  renderMvs: function (item) {
    item.innerHTML = this.listMvs.map((mv) => {
      return app.html`
            <div class="row__item row__column-3 mb-30">
                  <div class="row__item-display">
                    <div class="overlay">
                      <div class="row__item-img img__mv" style="background: url('${mv.image}') no-repeat center/cover"></div>
                      <div class="row__item-action">
                      <div class="row__item-action-ic row__item-play">
                        <i class="fa-solid fa-play"></i>
                      </div>
                      <div class="row__item-action-ic row-item-close">
                        <i class="fa-solid fa-xmark"></i>
                      </div>
                      <div class="row__item-mv--time">
                        <span>${mv.time}</span>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="row__item-inf row__item-inf-mv">
                    <div class="row_item-inf-avt">
                      <img src="${mv.authorAvatar}" alt="">
                    </div>
                    <div class="row__item-inf-about">
                      <a href="" class="row__item-inf-name">${mv.name}</a>
                      <h3>${mv.author.join(', ')}</h3>
                    </div>
                  </div>
                </div>
            `
    }).join('')
  },

  //render artist
  renderArtist: function (item) {
    item.innerHTML = this.listArtist.map((artist) => {
      return this.html
        `
            <div class="row__item row__column-5 mb-30">
                    <div class="row__item-display row__item-artist">
                      <div class="overlay">
                        <div class="row__item-img row__item-img-artist" style="background: url('${artist.image}') no-repeat center/cover"></div>
                        <div class="row__item-action">
                          <div class="row__item-action-ic row__item-play">
                            <i class="fa-solid fa-play"></i>
                          </div>
                      </div>
                      </div>
                    </div>
                    <div class="row__item-inf row__item-inf-artist">
                      <a href="" class="row__item-inf-name">${artist.name}</a>
                      <h3>${artist.followers} quan tâm</h3>
                      <div class="artist__follow">
                        <i class="fa-solid fa-check"></i>
                        <span>ĐÃ QUAN TÂM</span>
                      </div>
                    </div>
                  </div>
            `
    }).join('')
  },

  //render normal list 
  renderNormalList: function (item) {
    this.listNormalPlaylist.forEach((normalPlaylist, index) => {
      var element = (index == this.listNormalPlaylist.length - 1) ? ['fullHeight', 'wrap'] : ['']
      if (item[index]) {
        item[index].innerHTML +=
          `<div class="content__header m-mb-16">
                            <a href="#" class="content__header-link">${normalPlaylist.header}</a>
                        </div>
                        <div class="content__body ${element[0]}">
                            <div class="col content__body-discover normal__playlist-discover normal__playlist-list ${element[1]}">
                            ${normalPlaylist.playlists.map((normalPlaylistItem) => {
            return this.html
              `<div class="row__item row__column-5 mb-30 normal__playlist-item">
                                <div class="row__item-display">
                                  <div class="overlay">
                                    <div class="row__item-img"
                                      style="background: url('${normalPlaylistItem.image}') no-repeat center/cover"></div>
                                    <div class="row__item-action">
                                      <div class="row__item-action-ic row__item-heart">
                                        <i class="fa-regular fa-heart icon__heart"></i>
                                      </div>
                                      <div class="row__item-action-ic row__item-play">
                                        <i class="fa-solid fa-play"></i>
                                      </div>
                                      <div class="row__item-action-ic row__item-dots">
                                        <i class="fa-solid fa-ellipsis"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row__item-inf row__item-inf-mv">
                                  <div class="row__item-inf-about">
                                    <a href="" class="row__item-inf-name">${normalPlaylistItem.name}</a>
                                    <h3 style="font-size: 1.4rem">${normalPlaylistItem.artists.join(', ')}</h3>
                                  </div>
                                </div>
                              </div>`
          }).join('')
          }
                        </div>
                </div>`
      }
    })
  },

  renderTabZingChartList: function () {
    var arrayNumber = ['number-blue', 'number-red', 'number-green', 'number-text']
    tabZingChartList.innerHTML = this.listSongCharts.map((itemSong, index) => {
      if (index > 2) index = arrayNumber.length - 1
      return app.html
        `
                <div class="content__playmusic-item-zingchart">
              <div class="item__places">
                <div class="item__places-number ${arrayNumber[index]}">${itemSong.rank}</div>
                <i class="fa-solid fa-minus"></i>
              </div>
              <div class="content__playmusic-item-zingchart-body">
                <div class="content__playmusic-item-about">
                  <img src="${itemSong.image}" alt="" class="content__playmusic-item-img">
                  <div class="arrow-right"></div>
                  <div class="content__playmusic-item-inf">
                      <span class="name">${itemSong.name}</span>
                      <span class="singer">${itemSong.singe}</span>
                  </div>
              </div>
              <p class="content__playmusic-item-time">
                ${itemSong.time}
              </p>
              <div class="content__playmusic-item-ic">
                  <i class="fa-solid fa-microphone icon__micro"></i>
                  <i class="fa-solid fa-heart icon__primary icon__heart"></i>
                  <i class="fa-solid fa-ellipsis"></i>
              </div>
              </div>
          </div>
            `
    }).join('')
  },

  renderRadioStanding: function () {
    tabRadios.forEach((tabRadio) => {
      tabRadio.innerHTML += this.radioItems.map((radioItem) => {
        return this.html
          `
                <div class="row__item row__column-7 mb-30">
                <div class="tab__radio-svg">
                  <svg class = "tab__radio-svg-item" height="100%" width="100%" viewbox="0 0 100 100">
                    <circle cx="50" cy="50" r="48.5" stroke="rgb(255, 75, 74)" stroke-width="2.5" stroke-dasharray="306" stroke-dashoffset="${Math.floor(Math.random() * 306)}"/>
                    <circle cx="50" cy="50" r="48.5" stroke="rgba(255, 255, 255, 0.2)" stroke-width="2.5"/>
                  </svg>
                <div class="row__item-display row__item-artist row__item-artist-radio">
                  <div class="overlay">
                    <div class="row__item-img row__item-img-artist" style="background: url('${radioItem.image}') no-repeat center/cover"></div>
                    <div class="row__item-action">
                      <div class="row__item-action-ic row__item-play">
                        <i class="fa-solid fa-play"></i>
                      </div>
                  </div>
                  </div>
                </div>
                <div class="logo__radio">
                  <img class="logo__radio" src="${radioItem.logo}" alt="">
                </div>
                <div class="radio__live">
                  <p>LIVE</p>
                </div>
                </div>
                <div class="row__item-inf row__item-inf-artist">
                  <a href="" class="row__item-inf-name">${radioItem.name}</a>
                  <h3>${radioItem.viewers} người xem</h3>
                </div>
              </div>
                
                `
      }).join('')
    })

  },

  // Render Special playlists
  renderSpecialPlaylist: function () {
    this.listSpecialPlaylist.forEach((listSpecialPlaylistItem, index) => {
      if (contentRadio[index]) {
        contentRadio[index].innerHTML =
          `
                    <div class="content__playlist-header content__header m-mb-16">
                      <div class="row__item-info">
                        <div class="row__item-display reset-p">
                          <img src="${listSpecialPlaylistItem.header.image}" alt="" class="row__item-display-img">
                          <div class="row__item-info-label">
                            <span>${listSpecialPlaylistItem.header.explication}</span>
                            <h3 class="row__item-inf-name">${listSpecialPlaylistItem.header.topicName}</h3>
                          </div>
                        </div>
                      </div>
          
                    </div>
                    <div class="content__body fullHeight m0">
                      <div class="content__artist-body col content__music-list special_playlist-item">
                            ${listSpecialPlaylistItem.playlists.map((itemChild) => {
            return this.html`
                                <div class="row__item row__column-5 mb-30">
                  <div class="row__item-display">
                    <div class="overlay">
                      <div class="row__item-img" style="background: url('${itemChild.image}') no-repeat center/cover"></div>
                      <div class="row__item-action">
                      <div class="row__item-action-ic row__item-heart">
                        <i class="fa-regular fa-heart icon__heart"></i>
                      </div>
                      <div class="row__item-action-ic row__item-play">
                        <i class="fa-solid fa-play"></i>
                      </div>
                      <div class="row__item-action-ic row__item-dots">
                        <i class="fa-solid fa-ellipsis"></i>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="row__item-inf">
                    <a href="" class="row__item-inf-name">
                        <p>${itemChild.name}</p>
                    </a>
                    <h3>${itemChild.creator}</h3>
                  </div>
                </div>
                                `
          }).join('')}
                      </div>
                    </div>`

      }
    })
  },

  renderSingerSliders: function () {
    followingSliderList.innerHTML += this.listSingerSlide.map((item) => {
      return app.html`
            <div class="following__slider-item row__column-5 ">
                <img src="${item.image}" alt="">
            </div>
            `
    }).join('')
  },

  renderPostCol: function () {
    followingPostCol.forEach((followingPostColItem, index) => {
      followingPostColItem.innerHTML = this.listPost[index].map((item) => {
        return app.html` <div class="following__post-item">
                <div class="following__post-item-header"> 
                  <div class="post__item-header-img">
                    <img src="${item.authorAvatar}" alt="">
                  </div>
                  <div class="post__item-header-inf">
                    <div class="name">
                      <h3 class="name__label">${item.name}</h3>
                      <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                      <h3 class = "name__care">Quan tâm</h3>
                    </div>
                    <div class="time">
                      <span>${item.time}</span>
                    </div>
                  </div>
                </div>
                <div class="following__post-item-content">
                  <div class="status">
                   ${item.content}
                  </div>
                  <img src="${item.image}" alt="">
                  <div class="interact">
                    <div class="interact__heart interact__item">
                      <i class="fa-regular fa-heart icon__heart-post"></i>
                      <span class="quantity__ic-heart">${Math.floor(Math.random() * 1000)}</span>
                    </div>
                    <div class="interact__cmt interact__item">
                      <i class="fa-regular fa-comment-dots"></i>
                      <span class="quantity__ic-cmt">${Math.floor(Math.random() * 100)}</span>
                    </div>

                  </div>
                </div>
              </div>`
      }).join('')
    })
  },

  renderSlideDiscover: function () {
    contentSliderBody.innerHTML = this.listExploreSlide.map((item) => {
      return app.html`
            <div class="row__item row__column-3">
                  <div class="row__item-img img__mv img__slider-discover" style="background: url('${item.image}') no-repeat center/cover"></div>
                </div>
            `
    }).join('')
  },

  // render tabs content
  renderTabContent: function () {
    this.renderMusic(contentMenuSong, 0)
    this.renderPlaylist(contentMenuPlaylist)
    this.renderAlbum(contentMenuAlbum)
    this.renderMvs(contentMenuMv)
    this.renderArtist(contentMenuArtist)
  },

  getParentElement: function (element, classname) {
    while (element.classList.contains(classname) == false && element.tagName !== 'body') {
      element = element.parentNode
    }
    return element
  },

  //Định nghĩa thuộc tính cho app
  defineProperties: function () {
    Object.defineProperty(this, 'currentSong', {
      get: function () {
        return this.fullSongList[this.curIndexArraySong][this.indexSong]
      }
    })
  },

  // Chuyển thời lượng bài hát từ giây sang phút
  convertSecondToMinute: function (time) {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  },

  //Tải thông tin bài hát hiện tại
  loadCurrentSong: function () {
    playerSongThumb.style.background = `url('${this.currentSong.image}') center center/cover no-repeat`
    titleItems.forEach(titleItem => {
      titleItem.textContent = this.currentSong.name
    })
    playerSongAuthor.innerHTML = this.currentSong.singer.map((itemSinger) => {
      return app.html`<a href="#" class="is-ghost">${itemSinger}</a>`
    }).join(', ')
    audio.src = this.currentSong.path

    audio.preload = 'metadata';
    audio.onloadedmetadata = function () {
      durationTime.textContent = app.convertSecondToMinute(Math.floor(audio.duration))
    }

    songTitleWrap.style.width = titleItems[0].offsetWidth + 'px' // Chiều dài của title wrap
    this.titleItemWidth = $('.title__item') 
    this.titleAnimate.cancel()
  },

  loadThemeBg: function (themeListIndex, currentTheme) {
    const themeHandle = this.themes[themeListIndex][currentTheme]
    document.documentElement.style.setProperty('--bg-content-color', themeHandle.colors.bgContentColor)
    document.documentElement.style.setProperty('--border-box', themeHandle.colors.borderBox)
    document.documentElement.style.setProperty('--border-primary', themeHandle.colors.borderPrimary)
    document.documentElement.style.setProperty('--layout-bg', themeHandle.colors.layoutBg)
    document.documentElement.style.setProperty('--link-text-hover', themeHandle.colors.linkTextHover)
    document.documentElement.style.setProperty('--modal-scrollbar', themeHandle.colors.modalScrollbar)
    document.documentElement.style.setProperty('--player-bg', themeHandle.colors.playerBg)
    document.documentElement.style.setProperty('--purple-primary', themeHandle.colors.purplePrimary)
    document.documentElement.style.setProperty('--primary-bg', themeHandle.colors.primaryBg)
    document.documentElement.style.setProperty('--sidebar-popup-bg', themeHandle.colors.sidebarPopupBg)
    document.documentElement.style.setProperty('--text-color', themeHandle.colors.textColor)
    document.documentElement.style.setProperty('--text-item-hover', themeHandle.colors.textItemHover)
    document.documentElement.style.setProperty('--text-secondary', themeHandle.colors.textSecondary)
    document.documentElement.style.setProperty('--navigation-text', themeHandle.colors.navigationText)
    document.documentElement.style.setProperty('--placeholder-text', themeHandle.colors.placeholderText)
    if (themeHandle.hasOwnProperty('image'))
      app_wrap.style.backgroundImage = `url(${themeHandle.image})`
    else {
      app_wrap.style.backgroundImage = 'none'
      app_wrap.style.backgroundColor = themeHandle.colors.layoutBg
    }

  },

  handleToast: function (text) {
    console.log(text)
    const toast = document.createElement('div');

    const autoRemoveToast = setTimeout(() => {
      toast.remove()
    }, 5000)

    toast.style.animation = `slideRightToLeft ease 1s, slideLeftToRight ease-in 1s 4s forwards`

    toast.innerHTML += `
        <div class="toast__item" >
        <div class="toast__icon-bell">
            <i class="fa-regular fa-bell toast__icon"></i>
        </div>
        <div class="toast__body">
        <p class="toast__body-nof">Thông báo!</p>
        <p class = "toast__body-text">${text}</p>
        </div>
        <div class="toast__icon-close">
        <i class="fa-solid fa-xmark toast__icon"></i>
        </div>
        </div >`

    toastWrap.appendChild(toast)

    //Xử lý sự kiện click vào icon close menu toast
    toast.onclick = (e) => {
      if (e.target.closest('.toast__icon-close')) {
        toast.remove()
        clearTimeout(autoRemoveToast)
      }
    }

  },

  showTabContent: function (indexValue, element) {
    element.forEach((tab, index) => {
      if (tab.classList.contains('show')) {
        tab.classList.remove('show')
      }

      if (index == indexValue)
        tab.classList.add('show')
    })
  },

  showActive: function (element, menuItem) {
    var current = $(`${element}.active`);
    current.className = current.className.replace(" active", "");
    menuItem.classList.add('active')
  },

  animate: function () {
    if (!app.isMoved) {
      playerContainerSong.style.transform = 'translateX(20px)'
    }
    else {
      playerContainerSong.style.transform = 'translateX(0px)'
    }
  },

  animateTitle: function () {
    this.titleAnimate = playerTitleAnimate.animate([
      {transform: `translateX(-${this.titleItemWidth.offsetWidth}px)`},
    ],
    {
      direction: 'normal',
      duration: 2000,
      iterations: Infinity, // Số lần lặp lại hoạt hình
    })
    this.titleAnimate.pause()
    return this.titleAnimate
  },

  handleEvent: function () {

    const _this = this

    const rowItemPlaylists = $$('.row__item-play-main')
    const btnTransmit = $('.content__header-nav--transmit')
    const iconHearts = $$('.icon__heart')
    const iconMicros = $$('.icon__micro')
    const iconHeartPost = $$('.icon__heart-post');
    const iconVolumn = $('.player__option-btn .ic-main-vol');
    _this.playMusicItems = $$('.content__playmusic-item');
    const listThemes = $$('.themes__container-body .themes__container-item')
    const contentPlayMusicItemIc = $$('.content__playmusic-item-ic');

    contentPlayMusicItemIc.forEach((item) => {
      item.onclick = function (e) {
        e.stopPropagation()
      }
    })
    
    _this.animateTitle() // tạo ra animate

    //Xử lý sự kiện click vào button apply và preview theme
    listThemes.forEach((listTheme, themeIndex) => {
      listTheme.onclick = (e) => {
        const actionApply = e.target.closest('.row__item-action-apply');
        const actionPreview = e.target.closest('.row__item-action-preview');
        const actionItem = e.target.closest('.row__item-theme');

        if (actionItem) {
          var index = parseInt(actionItem.getAttribute('data-index'));
        }

        if (actionApply != null) {
          _this.loadThemeBg(themeIndex, index)
          _this.setConfig('themeListIndex', themeIndex)
          _this.setConfig('currentTheme', index)
        }

        if (actionPreview != null) {
          _this.loadThemeBg(themeIndex, index)
        }
      }
    })

    // Xử lý sự kiện click vào icon prev và next
    icNextItems.forEach((icNextItem) => {
      icNextItem.onclick = function () {
        var bodyContentIc = _this.getParentElement(icNextItem, 'content__arrow').querySelector('.content__body')
        var bodyContentIcWidth = bodyContentIc.offsetWidth;

        icNextItem.parentElement.querySelector('.item_prev').style.opacity = 1

        if (bodyContentIc != null) {
          bodyContentIc.scrollLeft += bodyContentIcWidth
          if (bodyContentIc.scrollLeft + bodyContentIcWidth >= bodyContentIc.scrollWidth - bodyContentIcWidth) {
            icNextItem.style.opacity = 0.5;
          }
        }
      }
    })

    icPrevItems.forEach((icPrevItem) => {
      icPrevItem.onclick = function () {
        var bodyContentIc = _this.getParentElement(icPrevItem, 'content__arrow').querySelector('.content__body')
        var bodyContentIcWidth = bodyContentIc.offsetWidth;

        icPrevItem.parentElement.querySelector('.item_next').style.opacity = 1

        if (bodyContentIc != null) {
          bodyContentIc.scrollLeft -= bodyContentIcWidth
          if (bodyContentIc.scrollLeft - bodyContentIcWidth <= 0) {
            icPrevItem.style.opacity = 0.5
          }
        }
      }
    })

    //Xử lý sự kiện click vào menu
    menuItems.forEach((menuItem, index) => {
      menuItem.onclick = function () {
        _this.showActive('.content__menu-item', menuItem)
        _this.showTabContent(index, contentTab)
      }
    })

    //Xử lý sự kiện khi click vào header link (dẫn tới tab content)
    contentHeaderLink.forEach((itemHeaderLink, index) => {
      itemHeaderLink.onclick = function () {
        menuItems.forEach((menuItem, i) => {
          if (i == index + 1) {
            _this.showTabContent(i, contentTab)
          }
        })

        menuItems.forEach((menuItem, i) => {
          _this.showActive('.content__menu-item', menuItems[index + 1])
        })
      }
    })

    //Xử lý sự kiện click vào navbar__subnav -> hiển thị thông báo
    navbarSubnav.forEach((itemSubnav) => {
      var errMessage = 'Tính năng đang được cập nhật. Vui lòng quay lại sau !!!'
      itemSubnav.onclick = function (e) {
        e.preventDefault()
        _this.handleToast(errMessage)
      }
    })

    //Xử lý sự kiện click icon heart song
    iconHearts.forEach((iconHeart) => {
      iconHeart.onclick = function () {
        var classListIc = iconHeart.classList
        classListIc.contains('fa-solid') ? classListIc.replace('fa-solid', 'fa-regular') : classListIc.replace('fa-regular', 'fa-solid')
        iconHeart.classList.toggle('icon__primary')
      }
    })

    //Xử lý sự kiện click icon micro song
    iconMicros.forEach((iconMicro) => {
      iconMicro.onclick = function () {
        iconMicro.classList.toggle('icon__primary')
      }
    })

    //Xử lý sự kiện click vào icon heart ở post 
    iconHeartPost.forEach((item) => {

      item.onclick = function () {
        var isIconActive = item.classList.contains('fa-regular') ? true : false;
        if (isIconActive) {
          (item.nextElementSibling).textContent = parseInt((item.nextElementSibling).innerHTML) + 1
          item.classList.replace('fa-regular', 'fa-solid')
          item.classList.add('icon__primary')
        }
        else {
          (item.nextElementSibling).textContent = parseInt((item.nextElementSibling).innerHTML) - 1
          item.classList.replace('fa-solid', 'fa-regular')
          item.classList.remove('icon__primary')
        }
      }
    })

    //Xử lý sự kiện click vào navbar__nav
    navbarItems.forEach((navbarItem, index) => {
      navbarItem.onclick = function () {
        _this.showActive('.navbar__item', navbarItem)
        _this.showTabContent(index, containerTabs)
      }
    })

    //Xử lý sự click vào btn show full zingchart
    btnZingCharts.forEach((btnZingChart) => {
      btnZingChart.onclick = function () {
        var isBtnShow = btnZingChart.classList.contains('show__full-zingchart') ? true : false
        if (isBtnShow) {
          tabZingChartList.style.height = '100%'
          btnShowZingchart.parentNode.style.display = 'none'
          notBtnShowZingchart.parentNode.style.display = 'block'
        }
        else {
          window.scrollTo(0, 0);
          tabZingChartList.style.height = '650px'
          notBtnShowZingchart.parentNode.style.display = 'none'
          btnShowZingchart.parentNode.style.display = 'block'
        }
      }
    })

    // Xử lý sự kiện click vào playlist item (nav home)
    rowItemPlaylists.forEach((rowItemPlaylist) => {
      rowItemPlaylist.onclick = function () {
        const index = _this.getParentElement(rowItemPlaylist, 'row__item-playlist').dataset.index
        if (index < 4) {
          _this.renderMusic(playMusicList, index)
          _this.renderMusic(contentMenuSong, index)
          _this.curIndexArraySong = index;
          _this.indexSong = 0
          _this.loadCurrentSong()
          audio.play()
        }
        else {
          _this.handleToast('Đang update. Vui lòng chọn 4 playlist đầu tiên !!!')
        }
      }
    })

    //Khi song được play 
    audio.onplay = function () {
      btnPlay.classList.add('playing')
      _this.isPlaying = true
      _this.isMoved = false
      songThumbAnimate.play()
      _this.animate()

      _this.animateTitle()
      _this.titleAnimate.play()

    }
    
    // Khi song được pause
    audio.onpause = function () {
      btnPlay.classList.remove('playing')
      _this.isPlaying = false
      _this.isMoved = true
      songThumbAnimate.pause()
      _this.animate()

      _this.titleAnimate.cancel()
    }

    //Xử lý quay đĩa CD
    const songThumbAnimate = playerSongThumb.animate([
      { transform: 'rotate(360deg)' },],
      {
        direction: 'reverse',
        duration: 10000, // Thời gian hoạt hình (ms)
        iterations: Infinity, // Số lần lặp lại hoạt hình
      })

    songThumbAnimate.pause()

    // Xử lý khi click vào song (Tab tổng quan)
    playMusicList.onclick = function (e) {
      const songNode = e.target.closest('.content__playmusic-item:not(.active)')
  
        if (songNode && !e.target.closest('.content__playmusic-item-ic')) {
          _this.indexSong = Number(songNode.dataset.index)
          _this.loadCurrentSong()
          _this.renderMusic(playMusicList, _this.curIndexArraySong)
          _this.renderMusic(contentMenuSong, _this.curIndexArraySong)
          _this.scrollToActiveSong()
          audio.play()
        }
        if (e.target.closest('.icon__micro')) {
          e.target.classList.toggle('icon__primary')
        }
        if (e.target.closest('.icon__heart')) {
          var classListIc = e.target.classList
          classListIc.contains('fa-solid') ? classListIc.replace('fa-solid', 'fa-regular') : classListIc.replace('fa-regular', 'fa-solid')
          e.target.classList.toggle('icon__primary')
        }
        
    }

    // Xử lý khi click vào song (Tab bài hát)
    contentMenuSong.onclick = function (e) {
      const songNode = e.target.closest('.content__playmusic-item:not(.active)')

        if (songNode && !e.target.closest('.content__playmusic-item-ic')) {
          _this.indexSong = Number(songNode.dataset.index)
          _this.loadCurrentSong()
          _this.renderMusic(playMusicList, _this.curIndexArraySong)
          _this.renderMusic(contentMenuSong, _this.curIndexArraySong)
          _this.scrollToActiveSong()
          audio.play()
        }
        if (e.target.closest('.icon__micro')) {
          e.target.classList.toggle('icon__primary')
        }
        if (e.target.closest('.icon__heart')) {
          var classListIc = e.target.classList
          classListIc.contains('fa-solid') ? classListIc.replace('fa-solid', 'fa-regular') : classListIc.replace('fa-regular', 'fa-solid')
          e.target.classList.toggle('icon__primary')
        }
        
    }

    // Xử lý sự kiện khi click vào play 
    btnPlay.onclick = function () {
      if (!_this.isPlaying) {
        audio.play()
      }
      else {
        audio.pause()
      }
    }

    //Khi tiến độ bài hát thay đổi
    audio.ontimeupdate = function () {
      ;
      if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progessFillSong.style.width = Math.floor(progressPercent) + '%'
        progessTimeSong.value = Math.floor(progressPercent)
      }
    }

    // Xử lý khi tua bài hát
    progessTimeSong.oninput = function (e) {
      audio.currentTime = parseInt(e.target.value) / 100 * audio.duration
    }

    // Xử lý khi thay đổi âm lượng
    progessVolumnSong.oninput = function (e) {
      audio.volume = Number(e.target.value) / 100
      progessFillVolumn.style.width = Number(e.target.value) + '%'

      if (progessFillVolumn.style.width == '0%')
        iconVolumn.classList.replace('fa-volume-high', 'fa-volume-xmark')

      else
        iconVolumn.classList.replace('fa-volume-xmark', 'fa-volume-high')
    }

    //Xử lý khi click vào icon volume
    iconVolumn.onclick = function () {
      if (!_this.isVolumeMin) {
        progessVolumnSong.value = 0
        _this.isVolumeMin = true
        audio.volume = 0
        progessFillVolumn.style.width = 0 + '%'
        iconVolumn.classList.replace('fa-volume-high', 'fa-volume-xmark')
        
      } else {
        progessVolumnSong.value = 100
        _this.isVolumeMin = false
        audio.volume = 1
        progessFillVolumn.style.width = 100 + '%'
        iconVolumn.classList.replace('fa-volume-xmark', 'fa-volume-high')
      }
    },

    // Xử lý khi next bài hát
    controlBtnNext.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong()
      } else {
        _this.nextSong()
      }
      audio.play()
    }

    // Xử lý khi prev bài hát
    controlBtnPrev.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong()
      } else {
        _this.prevSong()
      }
      audio.play()
    }

    // Xử lý bật/tắt btn random
    controlBtnRandom.onclick = function () {
      _this.isRandom = !_this.isRandom
      _this.setConfigPlayer('isRandom', _this.isRandom)
      // Nếu mà đối số thứ 2 là true thì sẽ add, false thì sẽ remove
      controlBtnRandom.classList.toggle('icon__primary', _this.isRandom)
    }

    // Xử lý next song khi audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play()
      }
      else {
        controlBtnNext.click()
      }
    }

    // Xử lý bật/tắt btn repeat
    controlBtnRepeat.onclick = function () {
      _this.isRepeat = !_this.isRepeat
      _this.setConfigPlayer('isRepeat', _this.isRepeat)

      controlBtnRepeat.classList.toggle('icon__primary', _this.isRepeat)
    }

    //Xử lý khi click phát tất cả
    btnTransmit.onclick = function () {
      _this.indexSong = 0
      _this.loadCurrentSong()
      _this.renderMusic(playMusicList, _this.curIndexArraySong)
      _this.renderMusic(contentMenuSong, _this.curIndexArraySong)
      audio.play()
    }
  },

  nextSong: function () {
    this.indexSong++;
    if (this.indexSong >= this.fullSongList[this.curIndexArraySong].length) {
      this.indexSong = 0
    }
    this.loadCurrentSong();
    this.renderMusic(playMusicList, this.curIndexArraySong)
    this.renderMusic(contentMenuSong, this.curIndexArraySong)
    this.scrollToActiveSong()
  },

  prevSong: function () {
    this.indexSong--;
    if (this.indexSong < 0) {
      this.indexSong = this.fullSongList[this.curIndexArraySong].length - 1
    }
    this.loadCurrentSong();
    this.renderMusic(playMusicList, this.curIndexArraySong)
    this.renderMusic(contentMenuSong, this.curIndexArraySong)
    this.scrollToActiveSong()
  },

  playRandomSong: function () {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * this.fullSongList[this.curIndexArraySong].length)
    } while (this.indexSong === newIndex)

    this.indexSong = newIndex
    this.loadCurrentSong()
  },

  scrollToActiveSong: function () {
    setTimeout(() => {
      $$('.content__playmusic-item.active').forEach((item) => {
        item.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }, 300)
    })
  },

  playRepeatSong: function () {
    if (this.isRepeat) {
      this.indexSong--;
    }
  },

  loadConfig: function () {
    this.loadThemeBg(this.themeKey.themeListIndex, this.themeKey.currentTheme)
    this.isRandom = this.config.isRandom
    this.isRepeat = this.config.isRepeat
  },

  start: function () {
    // Định nghĩa các thuộc tính cho object
    this.defineProperties()

    // Render list themes
    this.renderThemes()

    //Render list music song
    this.renderMusic(playMusicList, 0)

    //render playlist
    this.renderPlaylist(playList)

    //render albums
    this.renderAlbum(albumList)

    //render mvs
    this.renderMvs(mvList)

    //render artist
    this.renderArtist(artistList)

    //render tabContent
    this.renderTabContent()

    //render normal playlist
    this.renderNormalList(normalPlaylists)

    //
    this.renderTabZingChartList()

    //
    this.renderRadioStanding()

    //
    this.renderSingerSliders()

    //
    this.renderSlideDiscover()

    //
    this.renderSpecialPlaylist()

    //
    this.renderPostCol()

    //Xử lý các sự kiện
    this.handleEvent()

    // Tải thông tin bài hát hiện tại vào UI khi chạy ứng dụng
    this.loadCurrentSong()

    //Load config
    this.loadConfig()

    controlBtnRandom.classList.toggle('icon__primary', this.isRandom)
    controlBtnRepeat.classList.toggle('icon__primary', this.isRepeat)

  }
}

app.start();

// preventDefault() là ngăn chặn hành vi mặc định của một e
// stopPropagation() ngăn chặn hành vi nổi bọt
function eventDefault(target, event) {
  target.addEventListener(event, (e) => {
    e.preventDefault()
  })
}


document.onclick = (e) => {
  menuSetting.classList.remove('show')
}

// Xử lý sự kiện focus vào ô tìm kiếm
eventDefault(searchHistory, 'mousedown');

eventDefault(searchHistory, 'click')


//Xử lý sự kiện bật tắt menu setting
menuSetting.addEventListener('click', (e) => {
  e.stopPropagation()
})

iconSetting.addEventListener('click', (e) => {
  e.stopPropagation()
  menuSetting.classList.toggle('show')
})


//Xử lý sự kiện bật tắt menu theme
iconThemeOpen.addEventListener('click', (e) => {
  themeWrap.classList.add('show')
})

iconThemeClose.addEventListener('click', (e) => {
  themeWrap.classList.remove('show')
})

themeWrap.addEventListener('click', (e) => {
  e.stopPropagation()
  themeWrap.classList.remove('show')
})

themeContainer.addEventListener('click', (e) => {
  e.stopPropagation()
})

