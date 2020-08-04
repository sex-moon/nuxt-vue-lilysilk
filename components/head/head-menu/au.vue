<template>
  <div class="auContent">
    <ul class="mainTitle">
      <li @mouseenter="enter1" @mouseleave="leave1">
        <router-link :to="{ path: `/${$route.params.country}/c/19mm` }"
          ><span>NEW</span></router-link>
      </li>
      <li @mouseenter="enter2" @mouseleave="leave2">
        <router-link
          :to="{ path: `/${$route.params.country}/c/silk-pillowcases` }"
          ><span>PILLOWCASE</span></router-link>
      </li>
      <li @mouseenter="enter3" @mouseleave="leave3">
        <router-link :to="{ path: `/${$route.params.country}/c/bedding` }"
          ><span>BEDDING</span></router-link>
      </li>
      <li @mouseenter="enter4" @mouseleave="leave4">
        <router-link :to="{ path: `/${$route.params.country}/c/sleepwear` }"
          ><span>SLEEPWEAR</span></router-link>
      </li>
      <li @mouseenter="enter5" @mouseleave="leave5">
        <router-link
          :to="{ path: `/${$route.params.country}/c/womens-clothing` }"
          ><span>CLOTHING</span></router-link>
      </li>
      <li @mouseenter="enter6" @mouseleave="leave6">
        <router-link
          :to="{ path: `/${$route.params.country}/c/shirts-blouses` }"
          ><span>SHIRTS & BLOUSES</span></router-link>
      </li>
      <li @mouseenter="enter7" @mouseleave="leave7">
        <router-link :to="{ path: `/${$route.params.country}/c/lingerie` }"
          ><span>LINGERIE</span></router-link>
      </li>
      <li @mouseenter="enter8" @mouseleave="leave8">
        <router-link :to="{ path: `/${$route.params.country}/c/accessories` }"
          ><span>ACCESSORIES</span></router-link>
      </li>
      <li @mouseenter="enter9" @mouseleave="leave9">
        <router-link :to="{ path: `/${$route.params.country}/c/sale` }"
          ><span>SALE</span></router-link>
      </li>
    </ul>

    <ul class="mainContent">
      <transition name="fade">
        <!-- 1 -->
        <li
          style="display:none;"
          class="mainContent-li"
          v-show="seen1"
          @mouseenter="enter1"
          @mouseleave="leave1"
        >
          <div class="classification">
            <div class="grid20">
              <ul class="distance-bottom">
                <li class="small-title">
                  <router-link
                    :to="{ path: `/${$route.params.country}/c/new-in-today` }"
                    ><span>New In Today</span></router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ path: `/${$route.params.country}/c/new1` }"
                    ><span>07-20-2020</span></router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ path: `/${$route.params.country}/c/new2` }"
                    ><span>06-24-2020</span></router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ path: `/${$route.params.country}/c/new3` }"
                    ><span> 06-18-2020</span></router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ path: `/${$route.params.country}/c/new4` }"
                    ><span> 06-11-2020 </span></router-link
                  >
                </li>
              </ul>
              <ul>
                <li class="small-title">
                  <router-link
                    :to="{
                      path: `/${$route.params.country}/c/new-best-sellers`,
                    }"
                    ><span> New Best Sellers </span></router-link
                  >
                </li>
              </ul>
              <ul>
                <li class="small-title">
                  <router-link
                    :to="{ path: `/${$route.params.country}/c/back-in-stock` }"
                    ><span> Back In Stock </span></router-link
                  >
                </li>
              </ul>
            </div>
            <div class="grid20">
              <ul class="distance-bottom">
                <li class="small-title">
                  <router-link
                    :to="{ path: `/${$route.params.country}/c/new-in-women` }"
                    ><span> New In Women </span></router-link
                  >
                </li>
                <li></li>
                <li class="small-title">
                  <router-link
                    :to="{ path: `/${$route.params.country}/c/tops` }"
                    ><span> Tops </span></router-link>
                </li>
                <li>
                  <router-link
                    :to="{ path: `/${$route.params.country}/c/bottoms` }"
                    ><span> Bottoms </span></router-link>
                </li>
                <li>
                  <router-link
                    :to="{
                      path: `/${$route.params.country}/c/dresses-jumpsuits`,
                    }"
                    ><span> Dresses & Jumpsuits </span></router-link>
                </li>
              </ul>
              <ul>
                <li class="small-title">
                  <router-link
                    :to="{
                      path: `/${$route.params.country}/c/new-in-men`,
                    }"
                    ><span> New In Men </span></router-link
                  >
                </li>
              </ul>
              <ul>
                <li class="small-title">
                  <router-link
                    :to="{
                      path: `/${$route.params.country}/c/new-in-accessories`,
                    }"
                    ><span> New In Accessories </span></router-link
                  >
                </li>
              </ul>
            </div>
            <div class="grid20">
              <ul class="distance-bottom">
                <li class="small-title">Explore</li>
                <li>
                  <router-link
                    :to="{
                      path: `/${$route.params.country}/c/hot-list`,
                    }"
                    ><span> Storewide Top 20 </span></router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{
                      path: `/${$route.params.country}/c/vipmembership`,
                    }"
                    ><span> Vip Membership </span></router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{
                      path: `/${$route.params.country}/c/lilypoints-faq`,
                    }"
                    ><span> LiLYSILK Reward Points </span></router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{
                      path: `/${$route.params.country}/c/promo`,
                    }"
                    ><span> GET $20 </span></router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{
                      path: `/${$route.params.country}/c/lily-stars`,
                    }"
                    ><span> LILYSTAR Program </span></router-link
                  >
                </li>
              </ul>
            </div>
            <div class="grid40">
              <router-link
                :to="{
                  path: `/${$route.params.country}/c/new`,
                }"
              >
                <img
                  src="https://www.lilysilk.com/images/newhome/navipic-new.jpg"
                  alt=""
              /></router-link>
            </div>
          </div>
        </li>
      </transition>
      <!-- 1 end -->
      <!-- 2 -->
      <transition name="fade">
        <li
          style="display:none;"
          class="mainContent-li"
          v-show="seen2"
          @mouseenter="enter2"
          @mouseleave="leave2"
        >
          <div class="classification">
            <div class="grid30">
              <ul class="distance-bottom">
                <li class="small-title">Shop By Closure</li>
                <li>
                  <router-link
                    :to="{
                      path: `/${$route.params.country}/c/envelope`,
                    }"
                    ><span> Envelope Closure </span></router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{
                      path: `/${$route.params.country}/c/zipper-closure`,
                    }"
                    ><span> Zipper Closure </span></router-link
                  >
                </li>
              </ul>
              <ul class="distance-bottom">
                <li class="small-title">Shop By Momme</li>
                <router-link :to="{ path: `/${$route.params.country}/c/19mm` }"
                  ><li>19MM</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/22mm` }"
                  ><li>22MM</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/25mm` }"
                  ><li>25MM</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/pillowcase-best-sellers` }"
                  ><li class="small-title">Best Seller</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/hot-list` }"
                  ><li class="small-title">Storewide Top 20</li></router-link
                >
              </ul>
            </div>
            <div class="grid30">
              <ul class="distance-bottom">
                <li class="small-title">Shop By Flange</li>
                <router-link :to="{ path: `/${$route.params.country}/c/oxford` }"
                  ><li>Oxford</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/terse` }"
                  ><li>Terse</li></router-link
                >
              </ul>
              <ul class="distance-bottom">
                <li class="small-title">Shop By Size</li>
                <router-link :to="{ path: `/${$route.params.country}/c/king-pillowcase` }"
                  ><li>King Pillowcase</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/queen-pillowcase` }"
                  ><li>Queen Pillowcase</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/standard-pillowcase` }"
                  ><li>Standard Pillowcase</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/lily-stars` }"
                  ><li class="small-title">Free Pillowcases Program</li></router-link
                >
              </ul>
            </div>
            <div class="grid40">
              <img
                src="https://www.lilysilk.com/images/newhome/navipic-pillowcase.jpg"
                alt=""
              />
            </div>
          </div>
        </li>
      </transition>
      <!-- 2 end -->
      <!-- 3 -->
      <transition name="fade">
        <li
          style="display:none;"
          class="mainContent-li"
          v-show="seen3"
          @mouseenter="enter3"
          @mouseleave="leave3"
        >
          <div class="classification">
            <div class="grid30">
              <ul class="distance-bottom">
                <router-link :to="{ path: `/${$route.params.country}/c/sheet-sets` }"
                  ><li class="small-title">Silk Bedding Sets</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/optional-silk-bedding-sets` }"
                  ><li>Optional Silk Bedding Sets</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/2-4pcs-silk-sheet-sets` }"
                  ><li>2-4pcs Silk Sheet Sets</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/doona-and-doona-cover` }"
                  ><li>Comforter And Duvet Cover</li></router-link
                >
              </ul>
              <ul class="distance-bottom">
                <router-link :to="{ path: `/${$route.params.country}/c/sheets` }"
                  ><li class="small-title">Sheets</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-pillowcases` }"
                  ><li>Silk Pillowcase</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/doona-covers` }"
                  ><li>Silk Duvet Covers</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/fitted-sheets` }"
                  ><li>Silk Fitted Sheets</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/flat-sheets` }"
                  ><li>Silk Flat Sheets</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/hot-list` }"
                  ><li class="small-title">Storewide Top 20</li></router-link
                >
              </ul>
            </div>
            <div class="grid30">
              <ul class="distance-bottom">
                <router-link :to="{ path: `/${$route.params.country}/c/pillows-doonas` }"
                  ><li class="small-title">Pillows & Comforters</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/pillows` }"
                  ><li>Silk Pillows</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/doonas` }"
                  ><li>Silk Comforters</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-blankets-73` }"
                  ><li>Silk Blankets & Throws</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/decorative-accents` }"
                  ><li class="small-title">Decorative Accents</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/bed-skirts` }"
                  ><li>Silk Bedskirts</li></router-link
                >
              </ul>
            </div>
            <div class="grid40">
              <img
                src="https://www.lilysilk.com/images/newhome/navipic-bedding.jpg"
                alt=""
              />
            </div>
          </div>
        </li>
      </transition>
      <!-- 3 end -->
      <!-- 4 -->
      <transition name="fade">
        <li
          style="display:none;"
          class="mainContent-li"
          v-show="seen4"
          @mouseenter="enter4"
          @mouseleave="leave4"
        >
          <div class="classification">
            <div class="grid20">
              <ul class="distance-bottom">
                <router-link :to="{ path: `/${$route.params.country}/c/women` }"
                  ><li class="small-title">For Women</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/sleepwear-women-best-sellers` }"
                  ><li>Best Seller</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/hot-list` }"
                  ><li>Storewide Top 20</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/pyjamas` }"
                  ><li>Pajamas</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-nightgowns-for-women` }"
                  ><li>Chemises & Nightgowns</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/dressing-gowns` }"
                  ><li>Robes</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/nightgown-dressing-gowns-set` }"
                  ><li>Nightgown & Robe Set</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/nightshirt` }"
                  ><li>Sleep Shirt</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-camisole-set-for-women` }"
                  ><li>Camisole Set</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-loungewear` }"
                  ><li>Loungewear</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/for-women` }"
                  ><li class="small-title">Lingerie For Women</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-panties` }"
                  ><li>Panties</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-bras` }"
                  ><li>Bras</li></router-link
                >
              </ul>
            </div>
            <div class="grid20">
              <ul class="distance-bottom">
                <router-link :to="{ path: `/${$route.params.country}/c/men` }"
                  ><li class="small-title">For Men</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/sleepwear-men-best-sellers` }"
                  ><li>Best Seller</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/pyjamas` }"
                  ><li>Pajamas</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/dressing-gowns` }"
                  ><li>Robes</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/loungewear` }"
                  ><li>Loungewear</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/for-men` }"
                  ><li class="small-title">Underwear For Men</li></router-link
                >
              </ul>
            </div>
            <div class="grid20">
              <ul class="distance-bottom">
                <router-link :to="{ path: `/${$route.params.country}/c/sleepwear` }"
                  ><li class="small-title">For Kid</li></router-link
                >
              </ul>
              <ul class="distance-bottom">
                <router-link :to="{ path: `/${$route.params.country}/c/matching-family-pajamas` }"
                  ><li class="small-title">Accessories</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/accessories` }"
                  ><li class="small-title">Accessories</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-slippers` }"
                  ><li>Slipers</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/eye-mask` }"
                  ><li>Eye Mask</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-sleep-cap` }"
                  ><li>Sleep Cap</li></router-link
                >
              </ul>
            </div>
            <div class="grid40">
              <img
                src="https://www.lilysilk.com/images/newhome/navipic-sleepwear.jpg"
                alt=""
              />
            </div>
          </div>
        </li>
      </transition>
      <!-- 4 end -->
      <!-- 5  -->
      <transition name="fade">
        <li
          style="display:none;"
          class="mainContent-li"
          v-show="seen5"
          @mouseenter="enter5"
          @mouseleave="leave5"
        >
          <div class="classification classification5">
            <div class="grid40 grid5-ul">
              <p class="small-title">For Women</p>
              <p class="line"></p>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/new-in` }"
                  ><li class="small-title">New Arrivals</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/clothing-women-best-sellers` }"
                  ><li class="small-title">Best Seller</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/hot-list` }"
                  ><li class="small-title">Storewide Top 20</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/knitting` }"
                  ><li class="small-title">Silk Knitted</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/cashmere` }"
                  ><li class="small-title">Cashmere</li></router-link
                >
              </ul>
              <ul>
                <li class="small-title">Tops</li>
                <router-link :to="{ path: `/${$route.params.country}/c/shirts-blouses` }"
                  ><li>Shirts & Blouses</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}c/t-shirts` }"
                  ><li>Tees</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/camisoles` }"
                  ><li>Camisole</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/sweaters` }"
                  ><li>Sweaters</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/outerwear` }"
                  ><li class="distance-bottom">Outerwears</li></router-link
                >
                <li class="small-title">Bottoms</li>
                <router-link :to="{ path: `/${$route.params.country}/c/bottoms` }"
                  ><li>Pants</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/skirts` }"
                  ><li>Skirts & Shorts</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/dresses` }"
                  ><li class="small-title">Dresses & Jumpsuits</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/suiting` }"
                  ><li class="small-title">Suits</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/for-women` }"
                  ><li class="small-title">Lingerie</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-panties` }"
                  ><li>Panties</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-bras` }"
                  ><li>Bras</li></router-link
                >
              </ul>
            </div>
            <div class="grid10">
              <p class="small-title">For Men</p>
              <p class="line"></p>
              <ul class="distance-bottom">
                <router-link :to="{ path: `/${$route.params.country}/c/t-shirts` }"
                  ><li class="small-title">T-Shirts</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/shirts` }"
                  ><li>Shirts</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-underwear-for-men` }"
                  ><li>Underwear</li></router-link
                >
              </ul>
            </div>
            <div class="grid30 grid5-2">
              <p class="small-title">Accessories</p>
              <p class="line"></p>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/new-arrivals` }"
                  ><li class="small-title">New Arrivals</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/accessories-best-sellers` }"
                  ><li class="small-title">Best Seller</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/buy-more-save-more` }"
                  ><li class="small-title">30%Off,3+ Items</li></router-link
                >
              </ul>
              <ul>
                <li class="small-title">Beauty</li>
                <router-link :to="{ path: `/${$route.params.country}/c/silk-scrunchies` }"
                  ><li>Hair Accessories</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/eye-mask` }"
                  ><li>Eye Mask</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-sleep-cap` }"
                  ><li>Sleep Cap</li></router-link
                >
                 <router-link :to="{ path: `/${$route.params.country}/c/beauty-cocoons` }"
                  ><li>Skin Care Products</li></router-link
                >
                <li class="small-title">Fashion</li>
                <router-link :to="{ path: `/${$route.params.country}/c/silk-scarves` }"
                  ><li>Scarves</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/jewelry` }"
                  ><li>Jewelry</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/socks-gloves` }"
                  ><li class="distance-bottom">Hats & Gloves & Socks</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/cleaning-and-care-products` }"
                  ><li class="small-title">Cleaning and Care Products</li></router-link
                >
              </ul>
            </div>
            <div class="gridImg">
              <img
                src="https://www.lilysilk.com/images/newhome/navipic-clothing.jpg"
                alt=""
              />
            </div>
          </div>
        </li>
      </transition>
      <!-- 5 end -->
      <!-- 6 -->
      <transition name="fade">
        <li
          style="display:none;"
          class="mainContent-li"
          v-show="seen6"
          @mouseenter="enter6"
          @mouseleave="leave6"
        >
          <div class="classification">
            <div class="grid30">
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/shirts-blouses` }"
                  ><li class="small-title">For Women</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/new-arrivals` }"
                  ><li class="small-title">New Arrivals</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/shirts-women-best-sellers` }"
                  ><li class="small-title">Best Seller</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/hot-list` }"
                  ><li class="small-title">Storewide Top 20</li></router-link
                >
              </ul>
              <ul>
                <li class="small-title">Shop By Style</li>
                <router-link :to="{ path: `/${$route.params.country}/c/long-sleeve` }"
                  ><li>Long Sleeve</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/short-sleeve` }"
                  ><li>Short Sleeve</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/sleeveless` }"
                  ><li>Sleeveless</li></router-link
                >
              </ul>
            </div>
            <div class="grid30">
              <ul class="distance-bottom">
                <router-link :to="{ path: `/${$route.params.country}/c/shirts` }"
                  ><li class="small-title">For Men</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/new-arrivals` }"
                  ><li>New Arrivals</li></router-link
                >
              </ul>
            </div>
            <div class="grid40">
              <img
                src="https://www.lilysilk.com/images/newhome/navipic-shirts.jpg"
                alt=""
              />
            </div>
          </div>
        </li>
      </transition>
      <!-- 6 end -->
      <!-- 7 -->
      <transition name="fade">
        <li
          style="display:none;"
          class="mainContent-li"
          v-show="seen7"
          @mouseenter="enter7"
          @mouseleave="leave7"
        >
          <div class="classification">
            <div class="grid30">
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/for-women` }"
                  ><li class="small-title">For Women</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/lingerie-women-best-sellers` }"
                  ><li>Best Seller</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-panties` }"
                  ><li>Panties</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-bras` }"
                  ><li>Bras</li></router-link
                >
              </ul>
            </div>
            <div class="grid30">
              <ul class="distance-bottom">
                <router-link :to="{ path: `/${$route.params.country}/c/for-men` }"
                  ><li class="small-title">For Men</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-underwear-for-men` }"
                  ><li>Underwear</li></router-link
                >
              </ul>
            </div>
            <div class="grid40">
              <img
                src="https://www.lilysilk.com/images/newhome/navipic-ling.jpg"
                alt=""
              />
            </div>
          </div>
        </li>
      </transition>
      <!-- 7 end -->
      <!-- 8  -->
      <transition name="fade">
        <li
          style="display:none;"
          class="mainContent-li"
          v-show="seen8"
          @mouseenter="enter8"
          @mouseleave="leave8"
        >
          <div class="classification">
            <div class="grid20">
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/new-arrivals` }"
                  ><li class="small-title">New Arrivals</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/accessories-best-sellers` }"
                  ><li class="small-title">Best Seller</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/hot-list` }"
                  ><li class="small-title">Storewide Top 20</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/buy-more-save-more` }"
                  ><li class="small-title">30%Off,3+ Items</li></router-link
                >
              </ul>
              <ul>
                  <li class="small-title">Beauty</li>
                <router-link :to="{ path: `/${$route.params.country}/c/silk-scrunchies` }"
                  ><li>Hair Accessories</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/buy-more-save-more` }"
                  ><li>Eye Mask</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/eye-mask` }"
                  ><li>Sleep Cap</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/beauty-cocoons` }"
                  ><li>Skin Care Products</li></router-link
                >
              </ul>
            </div>
            <div class="grid20">
              <ul class="distance-bottom">
                <li class="small-title">Fashion</li>
                <router-link :to="{ path: `/${$route.params.country}/c/silk-scarves` }"
                  ><li>Scarves</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/jewelry` }"
                  ><li>Jewelry</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/socks-gloves` }"
                  ><li>Hats & Gloves & Socks</li></router-link
                >
              </ul>
            </div>
            <div class="grid20">
              <ul class="distance-bottom">
                <li class="small-title">Travel</li>
                <router-link :to="{ path: `/${$route.params.country}/c/pillowcase-eye-mask` }"
                  ><li>Pillowcase & Eye Mask</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/neck-pillow` }"
                  ><li>Neck Pillow</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/travel-bag` }"
                  ><li>Travel Bag</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/gauze-mask` }"
                  ><li>Gauze Mask</li></router-link
                >
              </ul>
              <ul class="distance-bottom">
                <li class="small-title">Home Accessories</li>
                <router-link :to="{ path: `/${$route.params.country}/c/beauty-cocoons` }"
                  ><li>Cleaning and Care Products</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-slippers` }"
                  ><li>Slipers</li></router-link
                >
              </ul>
            </div>
            <div class="grid40">
              <img
                src="https://www.lilysilk.com/images/newhome/navipic-acc.jpg"
                alt=""
              />
            </div>
          </div>
        </li>
      </transition>
      <!-- 8 end -->
      <!-- 9  -->
      <transition name="fade">
        <li
          style="display:none;"
          class="mainContent-li"
          v-show="seen9"
          @mouseenter="enter9"
          @mouseleave="leave9"
        >
          <div class="classification">
            <div class="grid30">
              <ul class="distance-bottom">
                <router-link :to="{ path: `/${$route.params.country}/c/shop-by-discount` }"
                  ><li class="small-title">Shop By Discount</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/50-70-off-collection` }"
                  ><li>50-70 Off Collection</li></router-link
                >
              </ul>
              <ul class="distance-bottom">
                <li class="small-title">Shop By Price</li>
                <router-link :to="{ path: `/${$route.params.country}/c/price-0-50` }"
                  ><li>$0-$50</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/price-50-150` }"
                  ><li>$50-$150</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/price-150-300` }"
                  ><li>$150-$300</li></router-link
                >
              </ul>
              <ul>
                <router-link :to="{ path: `/${$route.params.country}/c/shop-by-category` }"
                  ><li class="small-title">Shop By Category</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/silk-pillowcases` }"
                  ><li>Pillowcase-Buy 1 Get 1 30%OFF</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/sleepwear` }"
                  ><li>Pajamas-Up to 30%OFF</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/womens-clothing` }"
                  ><li>Women Clothing-Buy 1 Get 1</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/for-women` }"
                  ><li>40%OFF</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/buy-more-save-more` }"
                  ><li>Underwear for Women-Any 4 for</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/for-women` }"
                  ><li>$54.99</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/buy-more-save-more` }"
                  ><li>Accessories-30%OFF,3+ Items</li></router-link
                >
              </ul>
            </div>
            <div class="grid30">
              <ul class="distance-bottom">
                <router-link :to="{ path: `/${$route.params.country}/c/clearance-sale` }"
                  ><li class="small-title">Clearance Sale</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/pajamas` }"
                  ><li>Sleepwear & Bedding</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/women-clothing` }"
                  ><li>Women Clothing</li></router-link
                >
              </ul>
              <ul>
                <li class="small-title">Explore</li>
                <router-link :to="{ path: `/${$route.params.country}/c/hot-list` }"
                  ><li>Storewide Top 20</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/vipmembership` }"
                  ><li>Vip Menbership</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/lilypoints-faq` }"
                  ><li>LiLYSILK Reward Points</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/lily-stars` }"
                  ><li>LILYSTAR Program</li></router-link
                >
                <router-link :to="{ path: `/${$route.params.country}/c/stylegallery` }"
                  ><li>Luxury Moment with #lilysilk</li></router-link
                >
              </ul>
            </div>
            <div class="grid40">
              <img
                src="https://www.lilysilk.com/images/newhome/navipic-sale.jpg"
                alt=""
              />
            </div>
          </div>
        </li>
      </transition>
      <!-- 9 end -->
    </ul>
  </div>
</template>
<script>

export default {
  data() {
    return {
      seen1: false,
      seen2: false,
      seen3: false,
      seen4: false,
      seen5: false,
      seen6: false,
      seen7: false,
      seen8: false,
      seen9: false,
    };
  },
  watch: {
    "$route.params.name": function(newVal){
      this.seen1 = false;
      this.seen2 = false;
      this.seen3 = false;
      this.seen4 = false;
      this.seen5 = false;
      this.seen6 = false;
      this.seen7 = false;
      this.seen8 = false;
      this.seen9 = false;
    }
  },
  methods: {
    //   1
    enter1: function() {
      this.seen1 = true;
    },
    leave1: function() {
      this.seen1 = false;
    },
    // 2
    enter2: function() {
      this.seen2 = true;
    },
    leave2: function() {
      this.seen2 = false;
    },
    // 3
    enter3: function() {
      this.seen3 = true;
    },
    leave3: function() {
      this.seen3 = false;
    },
    // 4
    enter4: function() {
      this.seen4 = true;
    },
    leave4: function() {
      this.seen4 = false;
    },
    // 5
    enter5: function() {
      this.seen5 = true;
    },
    leave5: function() {
      this.seen5 = false;
    },
    // 6
    enter6: function() {
      this.seen6 = true;
    },
    leave6: function() {
      this.seen6 = false;
    },
    // 7
    enter7: function() {
      this.seen7 = true;
    },
    leave7: function() {
      this.seen7 = false;
    },
    // 8
    enter8: function() {
      this.seen8 = true;
    },
    leave8: function() {
      this.seen8 = false;
    },
    // 9
    enter9: function() {
      this.seen9 = true;
    },
    leave9: function() {
      this.seen9 = false;
    },
  },
};
</script>
<style scoped>

[v-show] {
  display: none;
}
a {
  color: #333;
  text-decoration: none;
}
ul {
  margin: 0 !important;
  padding: 0 !important;
}
li {
  list-style: none;
}
.auContent .mainTitle {
  margin: 0;
  padding: 0;
}
.auContent .mainTitle li {
  padding: 0 20px;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
}
.auContent .mainTitle li a span {
  color: #333;
  font-size: 16px;
  line-height: 50px;
}
.auContent .mainTitle li a span:hover {
  color: #c1a446;
}
.auContent .mainContent {
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
}
.auContent .mainContent .mainContent-li {
  width: 100%;
  z-index: 999;
  background: #fff;
  position: absolute;
  box-sizing: border-box;
  border-top: 1px solid #e5e5e5;
  box-shadow: 0 4px 5px -3px #888;
}
.classification {
  margin: 0 auto;
  text-align: center;
  padding: 20px 0;
  max-width: 960px;
  box-sizing: border-box;
  width: calc(100% - 7.5%);
}
.classification5 {
  margin: 0 auto;
  padding: 20px 0;
  max-width: none;
  text-align: left !important;
  text-align: center;
  box-sizing: border-box;
  width: calc(100% - 7.5%);
}
.classification {
  overflow: hidden;
}
.classification div {
  float: left;
}
.classification .grid5-ul {
  width: 36% !important;
  margin-right: 1%;
}
.classification .grid5-ul ul {
  float: left;
  width: 31%;
  margin-left: 1% !important;
  margin-right: 1% !important;
}
.classification .grid5-2 {
  width: 23% !important;
}
.classification .grid5-2 ul {
  float: left;
  width: 48%;
  margin-left: 1% !important;
  margin-right: 1% !important;
}
.classification .grid20 {
  width: 18%;
  text-align: left;
  margin-left: 1%;
  margin-right: 1%;
}
.classification .grid30 {
  width: 28%;
  text-align: left;
  margin-left: 1%;
  margin-right: 1%;
}
.classification .grid40 {
  width: 40%;
}
.classification .grid10 {
  width: 11%;
  margin-left: 1%;
  margin-right: 1%;
}
.gridImg {
  width: 23%;
  margin-left: 1%;
  margin-right: 1%;
}
.gridImg img {
  width: 100%;
}
.grid40 img {
  width: 100%;
}
.classification li {
  color: #939393;
  font-size: 14px;
}
.classification .small-title {
  color: #4c4c4c;
  font-size: 16px;
  font-weight: 400;
}
.small-title a {
}
.distance-bottom {
  margin-bottom: 20px !important;
}
.line {
  margin: 0;
  padding: 0;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 1px solid #e5e5e5;
}
.small-title {
  margin: 0;
  padding: 0;
  font-weight: bold;
}

.fade-enter {
}
.fade-enter-active {
  transition: all 1s ease;
}
.fade-leave-to {
}
.fade-leave-active {
  transition: all 0.1s;
}
</style>
