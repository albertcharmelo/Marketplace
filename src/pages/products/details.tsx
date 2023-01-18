import Script from 'next/script';
const details = () => {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Topico - Clean, Minimal E-commerce HTML5 Template </title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Place favicon.ico in the root directory */}
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.png" />
        {/* CSS here */}
        <link rel="stylesheet" href="/assets/css/preloader.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/backToTop.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/assets/css/fontAwesome5Pro.css" />
        <link rel="stylesheet" href="/assets/css/ui-range-slider.css" />
        <link rel="stylesheet" href="/assets/css/default.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        {/*[if lte IE 9]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
        <![endif]*/}
        {/* Add your site or application content here */}
        {/* preloader area start */}

        {/* preloader area end */}
        {/* back to top start */}
        <div className="progress-wrap">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        {/* back to top end */}
        {/* header area start */}
        <header>
          <div className="header__area">
            <div className="header__top header__padding d-none d-sm-block">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-5 d-none d-md-block">
                    <div className="header__welcome">
                      <span>Welcome to Worldwide Electronics Store</span>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-7">
                    <div className="header__action d-flex justify-content-center justify-content-md-end">
                      <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">My Wishlist</a></li>
                        <li><a href="#">Sign In</a></li>
                        <li><a href="#">Compare</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__info header__padding">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-3">
                    <div className="header__info-left d-flex justify-content-center justify-content-sm-between align-items-center">
                      <div className="logo">
                        <a href="index.html"><img src="/assets/img/logo/logo-black.png" alt="logo" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9">
                    <div className="header__info-right">
                      <div className="header__search f-left d-none d-sm-block">
                        <form action="#">
                          <div className="header__search-box">
                            <input type="text" placeholder="Search For Products..." />
                            <button type="submit">Search</button>
                          </div>
                          <div className="header__search-cat">
                            <select>
                              <option>All Categories</option>
                              <option>Best Seller Products</option>
                              <option>Top 10 Offers</option>
                              <option>New Arrivals</option>
                              <option>Phones &amp; Tablets</option>
                              <option>Electronics &amp; Digital</option>
                              <option>Fashion &amp; Clothings</option>
                              <option>Jewelry &amp; Watches</option>
                              <option>Health &amp; Beauty</option>
                              <option>Sound &amp; Speakers</option>
                              <option>TV &amp; Audio</option>
                              <option>Computers</option>
                            </select>
                          </div>
                        </form>
                      </div>
                      <div className="cart__mini-wrapper d-none d-md-flex f-right p-relative">
                        <a className="cart__toggle">
                          <span className="cart__total-item">01</span>
                        </a>
                        <span className="cart__content">
                          <span className="cart__my">My Cart:</span>
                          <span className="cart__total-price">$ 255.00</span>
                        </span>
                        <div className="cart__mini">
                          <div className="cart__close"><button type="button" className="cart__close-btn"><i className="fal fa-times" /></button></div>
                          <ul>
                            <li>
                              <div className="cart__title">
                                <h4>My Cart</h4>
                                <span>(1 Item in Cart)</span>
                              </div>
                            </li>
                            <li>
                              <div className="cart__item d-flex justify-content-between align-items-center">
                                <div className="cart__inner d-flex">
                                  <div className="cart__thumb">
                                    <a href="product-details.html">
                                      <img src="/assets/img/shop/product/cart/cart-mini-1.jpg" alt="" />
                                    </a>
                                  </div>
                                  <div className="cart__details">
                                    <h6><a href="product-details.html"> Samsung C49J89: £875, Debenhams Plus</a></h6>
                                    <div className="cart__price">
                                      <span>$255.00</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="cart__del">
                                  <a href="#"><i className="fal fa-trash-alt" /></a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="cart__sub d-flex justify-content-between align-items-center">
                                <h6>Car Subtotal</h6>
                                <span className="cart__sub-total">$255.00</span>
                              </div>
                            </li>
                            <li>
                              <a href="checkout.html" className="t-y-btn w-100 mb-10">Proceed to checkout</a>
                              <a href="cart.html" className="t-y-btn t-y-btn-border w-100 mb-10">view add edit cart</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__bottom header__padding header__bottom-border">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xl-9 col-lg-9 col-md-12 col-sm-6 col-6">
                    <div className="header__bottom-left d-flex d-xl-block align-items-center">
                      <div className="side-menu d-xl-none mr-20">
                        <button type="button" className="side-menu-btn offcanvas-toggle-btn"><i className="fas fa-bars" /></button>
                      </div>
                      <div className="main-menu d-none d-md-block">
                        <nav id="mobile-menu-2">
                          <ul>
                            <li>
                              <a href="index.html">Home <i className="far fa-angle-down" /></a>
                              <ul className="submenu">
                                <li><a href="index.html">Home Style 1</a></li>
                                <li><a href="index-2.html">Home Style 2</a></li>
                                <li><a href="index-3.html">Home Style 3</a></li>
                                <li><a href="index-4.html">Home Style 4</a></li>
                              </ul>
                            </li>
                            <li><a href="product.html">Features <i className="far fa-angle-down" /></a>
                              <ul className="submenu">
                                <li><a href="product.html">Product Type</a></li>
                                <li><a href="product.html">Product Features <i className="far fa-angle-down" /></a>
                                  <ul className="submenu">
                                    <li><a href="product-details.html">Simple Product</a></li>
                                    <li><a href="product-details-config.html">Configurable Product</a></li>
                                    <li><a href="product-details-group.html">Group Product</a></li>
                                    <li><a href="product-details-download.html">Downloadable Product</a></li>
                                  </ul>
                                </li>
                                <li><a href="product.html">Shop By Brand</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="blog.html">Blog <i className="far fa-angle-down" /></a>
                              <ul className="submenu">
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="blog-detaills.html">Blog Details</a></li>
                              </ul>
                            </li>
                            <li><a href="about.html">about us</a></li>
                            <li><a href="contact.html">contact</a></li>
                            <li>
                              <a href="about.html">pages <i className="far fa-angle-down" /></a>
                              <ul className="submenu">
                                <li><a href="login.html">Login</a></li>
                                <li><a href="register.html">Register</a></li>
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="wishlist.html">Wishlist</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="error.html">404 Error</a></li>
                              </ul>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3  col-sm-6  col-6 d-md-none d-lg-block">
                    <div className="header__bottom-right d-flex justify-content-end">
                      <div className="header__currency">
                        <select>
                          <option>USD</option>
                          <option>USD</option>
                          <option>USD</option>
                          <option>USD</option>
                          <option>USD</option>
                        </select>
                      </div>
                      <div className="header__lang d-md-none d-lg-block">
                        <select>
                          <option>English</option>
                          <option>Bangla</option>
                          <option>Arabic</option>
                          <option>Hindi</option>
                          <option>Urdu</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header area end */}
        {/* offcanvas area start */}
        <div className="offcanvas__area">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__close">
              <button className="offcanvas__close-btn" id="offcanvas__close-btn">
                <i className="fal fa-times" />
              </button>
            </div>
            <div className="offcanvas__content">
              <div className="offcanvas__logo mb-40">
                <a href="index.html">
                  <img src="/assets/img/logo/logo-black.png" alt="logo" />
                </a>
              </div>
              <div className="offcanvas__search mb-25">
                <form action="#">
                  <input type="text" placeholder="What are you searching for?" />
                  <button type="submit"><i className="far fa-search" /></button>
                </form>
              </div>
              <div className="mobile-menu-2 fix" />
              <div className="offcanvas__action">
              </div>
            </div>
          </div>
        </div>
        {/* offcanvas area end */}
        <div className="body-overlay" />
        {/* offcanvas area end */}
        <main>
          {/* breadcrumb area start */}
          <section className="breadcrumb__area box-plr-75">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="breadcrumb__wrapper">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Product Details</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* breadcrumb area end */}
          {/* product area start */}
          <section className="product__area box-plr-75 pb-70">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5">
                  <div className="product__details-nav d-sm-flex align-items-start">
                    <ul className="nav nav-tabs flex-sm-column justify-content-between" id="productThumbTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="thumbOne-tab" data-bs-toggle="tab" data-bs-target="#thumbOne" type="button" role="tab" aria-controls="thumbOne" aria-selected="true">
                          <img src="/assets/img/shop/product/details/product-nav-1.jpg" alt="" />
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="thumbTwo-tab" data-bs-toggle="tab" data-bs-target="#thumbTwo" type="button" role="tab" aria-controls="thumbTwo" aria-selected="false">
                          <img src="/assets/img/shop/product/details/product-nav-2.jpg" alt="" />
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="thumbThree-tab" data-bs-toggle="tab" data-bs-target="#thumbThree" type="button" role="tab" aria-controls="thumbThree" aria-selected="false">
                          <img src="/assets/img/shop/product/details/product-nav-3.jpg" alt="" />
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="thumbFour-tab" data-bs-toggle="tab" data-bs-target="#thumbFour" type="button" role="tab" aria-controls="thumbFour" aria-selected="false">
                          <img src="/assets/img/shop/product/details/product-nav-4.jpg" alt="" />
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="thumbFive-tab" data-bs-toggle="tab" data-bs-target="#thumbFive" type="button" role="tab" aria-controls="thumbFive" aria-selected="false">
                          <img src="/assets/img/shop/product/details/product-nav-5.jpg" alt="" />
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="thumbSix-tab" data-bs-toggle="tab" data-bs-target="#thumbSix" type="button" role="tab" aria-controls="thumbSix" aria-selected="false">
                          <img src="/assets/img/shop/product/details/product-nav-6.jpg" alt="" />
                        </button>
                      </li>
                    </ul>
                    <div className="product__details-thumb">
                      <div className="tab-content" id="productThumbContent">
                        <div className="tab-pane fade show active" id="thumbOne" role="tabpanel" aria-labelledby="thumbOne-tab">
                          <div className="product__details-nav-thumb">
                            <img src="/assets/img/shop/product/details/big/product-nav-big-1.jpg" alt="" />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="thumbTwo" role="tabpanel" aria-labelledby="thumbTwo-tab">
                          <div className="product__details-nav-thumb">
                            <img src="/assets/img/shop/product/details/big/product-nav-big-2.jpg" alt="" />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="thumbThree" role="tabpanel" aria-labelledby="thumbThree-tab">
                          <div className="product__details-nav-thumb">
                            <img src="/assets/img/shop/product/details/big/product-nav-big-3.jpg" alt="" />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="thumbFour" role="tabpanel" aria-labelledby="thumbFour-tab">
                          <div className="product__details-nav-thumb">
                            <img src="/assets/img/shop/product/details/big/product-nav-big-4.jpg" alt="" />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="thumbFive" role="tabpanel" aria-labelledby="thumbFive-tab">
                          <div className="product__details-nav-thumb">
                            <img src="/assets/img/shop/product/details/big/product-nav-big-5.jpg" alt="" />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="thumbSix" role="tabpanel" aria-labelledby="thumbSix-tab">
                          <div className="product__details-nav-thumb">
                            <img src="/assets/img/shop/product/details/big/product-nav-big-6.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7">
                  <div className="product__details-wrapper">
                    <div className="product__details">
                      <h3 className="product__details-title">
                        <a href="product-details.html">Smart Mobile Phone 7/7plus/8/8plus/X/Xr W 32 to 128GB</a>
                      </h3>
                      <div className="product__review d-sm-flex">
                        <div className="rating rating__shop mb-15 mr-35">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                        </div>
                        <div className="product__add-review mb-15">
                          <span><a href="#">1 Review</a></span>
                          <span><a href="#">Add Review</a></span>
                        </div>
                      </div>
                      <div className="product__price">
                        <span className="new">$150.00</span>
                        <span className="old">$320.00</span>
                      </div>
                      <div className="product__stock">
                        <span>Availability :</span>
                        <span>In Stock</span>
                      </div>
                      <div className="product__stock sku mb-30">
                        <span>SKU:</span>
                        <span>Samsung C49J89: £875, Debenhams Plus</span>
                      </div>
                      <div className="product__details-des mb-30">
                        <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                      <div className="product__details-stock">
                        <h3><span>Hurry Up!</span> Only 98 products left in stock.</h3>
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} data-width="100%" />
                        </div>
                      </div>
                      <div className="product__details-quantity mb-20">
                        <form action="#">
                          <div className="pro-quan-area d-lg-flex align-items-center">
                            <div className="product-quantity mr-20 mb-25">
                              <div className="cart-plus-minus p-relative"><input type="text" defaultValue={1} /></div>
                            </div>
                            <div className="pro-cart-btn mb-25">
                              <button className="t-y-btn" type="submit">Add to cart</button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="product__details-action">
                        <ul>
                          <li><a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a></li>
                          <li><a href="#" title="Compare"><i className="far fa-sliders-h" /></a></li>
                          <li><a href="#" title="Print"><i className="fal fa-print" /></a></li>
                          <li><a href="#" title="Print"><i className="fal fa-share-alt" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="product__details-des-tab mb-40 mt-110">
                    <ul className="nav nav-tabs" id="productDesTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="des-tab" data-bs-toggle="tab" data-bs-target="#des" type="button" role="tab" aria-controls="des" aria-selected="true">Details</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false">Review 5</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="tab-content" id="prodductDesTaContent">
                    <div className="tab-pane fade show active" id="des" role="tabpanel" aria-labelledby="des-tab">
                      <div className="product__details-des-wrapper">
                        <div className="product__details-des mb-20">
                          <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
                          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                        <div className="product__details-des mb-20">
                          <h3>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
                          <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                        </div>
                        <div className="product__details-des-banner w-img">
                          <img src="/assets/img/shop/product/details/product-details-banner.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                      <div className="product__details-review">
                        <div className="row">
                          <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="review-wrapper">
                              <h3 className="block-title">Customer Reviews</h3>
                              <div className="review-item">
                                <h3 className="review-title">Awesome product</h3>
                                <div className="review-ratings mb-10">
                                  <div className="review-ratings-single d-flex align-items-center">
                                    <span>Quality</span>
                                    <ul>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                    </ul>
                                  </div>
                                  <div className="review-ratings-single d-flex align-items-center">
                                    <span>Price</span>
                                    <ul>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                    </ul>
                                  </div>
                                  <div className="review-ratings-single d-flex align-items-center">
                                    <span>Value</span>
                                    <ul>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="review-text">
                                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quia eligendi molestias illum libero et.</p>
                                </div>
                                <div className="review-meta">
                                  <div className="review-author">
                                    <span>Review By </span>
                                    <span>Shahnewaz Sakil</span>
                                  </div>
                                  <div className="review-date">
                                    <span>Posted on</span>
                                    <span>1/21/20</span>
                                  </div>
                                </div>
                              </div>
                              <div className="review-item">
                                <h3 className="review-title">Nice</h3>
                                <div className="review-ratings mb-10">
                                  <div className="review-ratings-single d-flex align-items-center">
                                    <span>Quality</span>
                                    <ul>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                    </ul>
                                  </div>
                                  <div className="review-ratings-single d-flex align-items-center">
                                    <span>Price</span>
                                    <ul>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                    </ul>
                                  </div>
                                  <div className="review-ratings-single d-flex align-items-center">
                                    <span>Value</span>
                                    <ul>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="review-text">
                                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quia eligendi molestias illum libero et.</p>
                                </div>
                                <div className="review-meta">
                                  <div className="review-author">
                                    <span>Review By </span>
                                    <span>Selena Gomz</span>
                                  </div>
                                  <div className="review-date">
                                    <span>Posted on</span>
                                    <span>1/21/20</span>
                                  </div>
                                </div>
                              </div>
                              <div className="review-item">
                                <h3 className="review-title">Best product</h3>
                                <div className="review-ratings mb-10">
                                  <div className="review-ratings-single d-flex align-items-center">
                                    <span>Quality</span>
                                    <ul>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                    </ul>
                                  </div>
                                  <div className="review-ratings-single d-flex align-items-center">
                                    <span>Price</span>
                                    <ul>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                    </ul>
                                  </div>
                                  <div className="review-ratings-single d-flex align-items-center">
                                    <span>Value</span>
                                    <ul>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                      <li><a href="#"><i className="fal fa-star" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="review-text">
                                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quia eligendi molestias illum libero et.</p>
                                </div>
                                <div className="review-meta">
                                  <div className="review-author">
                                    <span>Review By </span>
                                    <span>Jonson</span>
                                  </div>
                                  <div className="review-date">
                                    <span>Posted on</span>
                                    <span>1/21/20</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="review-form">
                              <h3>Your Reviewing</h3>
                              <p>Australian Certified Organic Royal Gala Apples</p>
                              <form action="#">
                                <div className="review-input-box mb-15 d-flex align-items-start">
                                  <h4 className="review-input-title">Your Rating</h4>
                                  <div className="review-input">
                                    <div className="review-ratings mb-10">
                                      <div className="review-ratings-single d-flex align-items-center">
                                        <span>Quality</span>
                                        <ul>
                                          <li><a href="#"><i className="fas fa-star" /></a></li>
                                          <li><a href="#"><i className="fas fa-star" /></a></li>
                                          <li><a href="#"><i className="fas fa-star" /></a></li>
                                          <li><a href="#"><i className="fas fa-star" /></a></li>
                                          <li><a href="#"><i className="fas fa-star" /></a></li>
                                        </ul>
                                      </div>
                                      <div className="review-ratings-single d-flex align-items-center">
                                        <span>Price</span>
                                        <ul>
                                          <li><a href="#"><i className="fas fa-star" /></a></li>
                                          <li><a href="#"><i className="fas fa-star" /></a></li>
                                          <li><a href="#"><i className="fas fa-star" /></a></li>
                                          <li><a href="#"><i className="fas fa-star" /></a></li>
                                          <li><a href="#"><i className="fas fa-star" /></a></li>
                                        </ul>
                                      </div>
                                      <div className="review-ratings-single d-flex align-items-center">
                                        <span>Value</span>
                                        <ul>
                                          <li><a href="#"><i className="fas fa-star" /></a></li>
                                          <li><a href="#"><i className="fas fa-star" /></a></li>
                                          <li><a href="#"><i className="fas fa-star" /></a></li>
                                          <li><a href="#"><i className="fas fa-star" /></a></li>
                                          <li><a href="#"><i className="fas fa-star" /></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="review-input-box d-flex align-items-start">
                                  <h4 className="review-input-title">Nickname</h4>
                                  <div className="review-input">
                                    <input type="text" required />
                                  </div>
                                </div>
                                <div className="review-input-box d-flex align-items-start">
                                  <h4 className="review-input-title">Summary</h4>
                                  <div className="review-input">
                                    <input type="text" required />
                                  </div>
                                </div>
                                <div className="review-input-box d-flex align-items-start">
                                  <h4 className="review-input-title">Review</h4>
                                  <div className="review-input">
                                    <textarea defaultValue={""} />
                                  </div>
                                </div>
                                <div className="review-sub-btn">
                                  <button type="submit" className="t-y-btn t-y-btn-grey">submit review</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* product area end */}
          {/* product area start */}
          <section className="product__area box-plr-75 pb-20">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="section__head mb-40">
                    <div className="section__title">
                      <h3>Best Selling<span>Products</span></h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="product__slider owl-carousel">
                    <div className="product__item white-bg mb-30">
                      <div className="product__thumb p-relative">
                        <a href="product-details.html" className="w-img">
                          <img src="/assets/img/shop/product/product-1.jpg" alt="product" />
                          <img className="second-img" src="/assets/img/shop/product/product-2.jpg" alt="product" />
                        </a>
                        <div className="product__action p-absolute">
                          <ul>
                            <li><a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a></li>
                            <li><a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a></li>
                            <li><a href="#" title="Compare"><i className="far fa-sliders-h" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__content text-center">
                        <h6 className="product-name">
                          <a className="product-item-link" href="product-details.html"> High Quality Glass Ultra-Thin Kitchen Scale</a>
                        </h6>
                        <div className="rating">
                          <ul>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                          </ul>
                        </div>
                        <span className="price">$500.00</span>
                      </div>
                      <div className="product__add-btn">
                        <button type="button">Add to Cart</button>
                      </div>
                    </div>
                    <div className="product__item white-bg mb-30">
                      <div className="product__thumb p-relative">
                        <a href="product-details.html" className="w-img">
                          <img src="/assets/img/shop/product/product-3.jpg" alt="product" />
                          <img className="second-img" src="/assets/img/shop/product/product-4.jpg" alt="product" />
                        </a>
                        <div className="product__action p-absolute">
                          <ul>
                            <li><a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a></li>
                            <li><a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a></li>
                            <li><a href="#" title="Compare"><i className="far fa-sliders-h" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__content text-center">
                        <h6 className="product-name">
                          <a className="product-item-link" href="product-details.html"> LG 27UD58: £347.21, Ebuyer.com </a>
                        </h6>
                        <div className="rating">
                          <ul>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                          </ul>
                        </div>
                        <span className="price">$560.00</span>
                      </div>
                      <div className="product__add-btn">
                        <button type="button">Add to Cart</button>
                      </div>
                    </div>
                    <div className="product__item white-bg mb-30">
                      <div className="product__thumb p-relative">
                        <a href="product-details.html" className="w-img">
                          <img src="/assets/img/shop/product/product-5.jpg" alt="product" />
                          <img className="second-img" src="/assets/img/shop/product/product-6.jpg" alt="product" />
                        </a>
                        <div className="product__action p-absolute">
                          <ul>
                            <li><a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a></li>
                            <li><a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a></li>
                            <li><a href="#" title="Compare"><i className="far fa-sliders-h" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__content text-center">
                        <h6 className="product-name">
                          <a className="product-item-link" href="product-details.html"> Samsung C49J89: £875, Debenhams Plus</a>
                        </h6>
                        <div className="rating">
                          <ul>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                          </ul>
                        </div>
                        <span className="price">$450.00</span>
                      </div>
                      <div className="product__add-btn">
                        <button type="button">Add to Cart</button>
                      </div>
                    </div>
                    <div className="product__item white-bg mb-30">
                      <div className="product__thumb p-relative">
                        <a href="product-details.html" className="w-img">
                          <img src="/assets/img/shop/product/product-7.jpg" alt="product" />
                          <img className="second-img" src="/assets/img/shop/product/product-8.jpg" alt="product" />
                        </a>
                        <div className="product__action p-absolute">
                          <ul>
                            <li><a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a></li>
                            <li><a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a></li>
                            <li><a href="#" title="Compare"><i className="far fa-sliders-h" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__content text-center">
                        <h6 className="product-name">
                          <a className="product-item-link" href="product-details.html"> Blink Home Security Camera System 01 </a>
                        </h6>
                        <div className="rating">
                          <ul>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                          </ul>
                        </div>
                        <span className="price">$720.00</span>
                      </div>
                      <div className="product__add-btn">
                        <button type="button">Add to Cart</button>
                      </div>
                    </div>
                    <div className="product__item white-bg mb-30">
                      <div className="product__thumb p-relative">
                        <a href="product-details.html" className="w-img">
                          <img src="/assets/img/shop/product/product-9.jpg" alt="product" />
                          <img className="second-img" src="/assets/img/shop/product/product-10.jpg" alt="product" />
                        </a>
                        <div className="product__action p-absolute">
                          <ul>
                            <li><a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a></li>
                            <li><a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a></li>
                            <li><a href="#" title="Compare"><i className="far fa-sliders-h" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__content text-center">
                        <h6 className="product-name">
                          <a className="product-item-link" href="product-details.html"> Blue t-shir for men (X, M, XL, XXL) </a>
                        </h6>
                        <div className="rating">
                          <ul>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                          </ul>
                        </div>
                        <span className="price">$720.00</span>
                      </div>
                      <div className="product__add-btn">
                        <button type="button">Add to Cart</button>
                      </div>
                    </div>
                    <div className="product__item white-bg mb-30">
                      <div className="product__thumb p-relative">
                        <a href="product-details.html" className="w-img">
                          <img src="/assets/img/shop/product/product-11.jpg" alt="product" />
                          <img className="second-img" src="/assets/img/shop/product/product-12.jpg" alt="product" />
                        </a>
                        <div className="product__action p-absolute">
                          <ul>
                            <li><a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a></li>
                            <li><a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a></li>
                            <li><a href="#" title="Compare"><i className="far fa-sliders-h" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__content text-center">
                        <h6 className="product-name">
                          <a className="product-item-link" href="product-details.html"> Samsung A20 Pro Ultra CPU 4/64 GB</a>
                        </h6>
                        <div className="rating">
                          <ul>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                          </ul>
                        </div>
                        <span className="price">$720.00</span>
                      </div>
                      <div className="product__add-btn">
                        <button type="button">Add to Cart</button>
                      </div>
                    </div>
                    <div className="product__item white-bg mb-30">
                      <div className="product__thumb p-relative">
                        <a href="product-details.html" className="w-img">
                          <img src="/assets/img/shop/product/product-7.jpg" alt="product" />
                          <img className="second-img" src="/assets/img/shop/product/product-8.jpg" alt="product" />
                        </a>
                        <div className="product__action p-absolute">
                          <ul>
                            <li><a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a></li>
                            <li><a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a></li>
                            <li><a href="#" title="Compare"><i className="far fa-sliders-h" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__content text-center">
                        <h6 className="product-name">
                          <a className="product-item-link" href="product-details.html"> Blink Home Security Camera System 01 </a>
                        </h6>
                        <div className="rating">
                          <ul>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                            <li><a href="#"><i className="far fa-star" /></a></li>
                          </ul>
                        </div>
                        <span className="price">$720.00</span>
                      </div>
                      <div className="product__add-btn">
                        <button type="button">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* product area end */}
          {/* brand area start */}
          <section className="brand__area">
            <div className="container custom-container">
              <div className="row align-items-center">
                <div className="col-xl-12">
                  <div className="brand__slider owl-carousel">
                    <div className="brand__item">
                      <img src="/assets/img/brand/brand-1.jpg" alt="" />
                    </div>
                    <div className="brand__item">
                      <img src="/assets/img/brand/brand-2.jpg" alt="" />
                    </div>
                    <div className="brand__item">
                      <img src="/assets/img/brand/brand-3.jpg" alt="" />
                    </div>
                    <div className="brand__item">
                      <img src="/assets/img/brand/brand-4.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* brand area end */}
          {/* shop modal start */}
          <div className="modal fade" id="productModalId" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered product__modal" role="document">
              <div className="modal-content">
                <div className="product__modal-wrapper p-relative">
                  <div className="product__modal-close p-absolute">
                    <button data-bs-dismiss="modal"><i className="fal fa-times" /></button>
                  </div>
                  <div className="product__modal-inner">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="product__modal-box">
                          <div className="tab-content" id="modalTabContent">
                            <div className="tab-pane fade show active" id="nav1" role="tabpanel" aria-labelledby="nav1-tab">
                              <div className="product__modal-img w-img">
                                <img src="/assets/img/shop/product/quick-view/quick-view-1.jpg" alt="" />
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav2" role="tabpanel" aria-labelledby="nav2-tab">
                              <div className="product__modal-img w-img">
                                <img src="/assets/img/shop/product/quick-view/quick-view-2.jpg" alt="" />
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav3" role="tabpanel" aria-labelledby="nav3-tab">
                              <div className="product__modal-img w-img">
                                <img src="/assets/img/shop/product/quick-view/quick-view-3.jpg" alt="" />
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav4" role="tabpanel" aria-labelledby="nav4-tab">
                              <div className="product__modal-img w-img">
                                <img src="/assets/img/shop/product/quick-view/quick-view-4.jpg" alt="" />
                              </div>
                            </div>
                          </div>
                          <ul className="nav nav-tabs" id="modalTab" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="nav1-tab" data-bs-toggle="tab" data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1" aria-selected="true">
                                <img src="/assets/img/shop/product/quick-view/nav/quick-nav-1.jpg" alt="" />
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="nav2-tab" data-bs-toggle="tab" data-bs-target="#nav2" type="button" role="tab" aria-controls="nav2" aria-selected="false">
                                <img src="/assets/img/shop/product/quick-view/nav/quick-nav-2.jpg" alt="" />
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="nav3-tab" data-bs-toggle="tab" data-bs-target="#nav3" type="button" role="tab" aria-controls="nav3" aria-selected="false">
                                <img src="/assets/img/shop/product/quick-view/nav/quick-nav-3.jpg" alt="" />
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="nav4-tab" data-bs-toggle="tab" data-bs-target="#nav4" type="button" role="tab" aria-controls="nav4" aria-selected="false">
                                <img src="/assets/img/shop/product/quick-view/nav/quick-nav-4.jpg" alt="" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="product__modal-content">
                          <h4><a href="product-details.html">Samsung C49J89: £875, Debenhams Plus</a></h4>
                          <div className="product__modal-des mb-40">
                            <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt </p>
                          </div>
                          <div className="product__stock">
                            <span>Availability :</span>
                            <span>In Stock</span>
                          </div>
                          <div className="product__stock sku mb-30">
                            <span>SKU:</span>
                            <span>Samsung C49J89: £875, Debenhams Plus</span>
                          </div>
                          <div className="product__review d-sm-flex">
                            <div className="rating rating__shop mb-15 mr-35">
                              <ul>
                                <li><a href="#"><i className="fal fa-star" /></a></li>
                                <li><a href="#"><i className="fal fa-star" /></a></li>
                                <li><a href="#"><i className="fal fa-star" /></a></li>
                                <li><a href="#"><i className="fal fa-star" /></a></li>
                                <li><a href="#"><i className="fal fa-star" /></a></li>
                              </ul>
                            </div>
                            <div className="product__add-review mb-15">
                              <span><a href="#">1 Review</a></span>
                              <span><a href="#">Add Review</a></span>
                            </div>
                          </div>
                          <div className="product__price">
                            <span>$560.00</span>
                          </div>
                          <div className="product__modal-form mb-30">
                            <form action="#">
                              <div className="pro-quan-area d-lg-flex align-items-center">
                                <div className="product-quantity mr-20 mb-25">
                                  <div className="cart-plus-minus p-relative"><input type="text" defaultValue={1} /></div>
                                </div>
                                <div className="pro-cart-btn mb-25">
                                  <button className="t-y-btn" type="submit">Add to cart</button>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="product__modal-links">
                            <ul>
                              <li><a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a></li>
                              <li><a href="#" title="Compare"><i className="far fa-sliders-h" /></a></li>
                              <li><a href="#" title="Print"><i className="fal fa-print" /></a></li>
                              <li><a href="#" title="Print"><i className="fal fa-share-alt" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* shop modal end */}
        </main>
        {/* footer area start */}
        <footer>
          <div className="footer__area footer-bg-2 yellow-footer">
            <div className="footer__top pt-80 pb-40">
              <div className="container custom-container">
                <div className="row">
                  <div className="col-xl-6 col-lg-12">
                    <div className="footer__top-left">
                      <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6">
                          <div className="footer__widget">
                            <div className="footer__widget-title mb-45">
                              <div className="footer__logo">
                                <a href="index.html"><img src="/assets/img/logo/logo-white.png" alt="" /></a>
                              </div>
                            </div>
                            <div className="footer__widget-content">
                              <div className="footer__hotline footer__hotline-4 d-flex align-items-center mb-30">
                                <div className="icon mr-15">
                                  <i className="fal fa-headset" />
                                </div>
                                <div className="text">
                                  <h4>Hotline Free 24/24:</h4>
                                  <span>(+100) 123 456 7890</span>
                                </div>
                              </div>
                              <div className="footer__info footer__info-4">
                                <ul>
                                  <li>
                                    <span>Add:
                                      <a target="_blank" href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">Walls Street 68, Mahattan, New York, USA</a>
                                    </span>
                                  </li>
                                  <li><span>Email: <a href="mailto:info@thebuesky.com">info@thebuesky.com</a></span></li>
                                  <li><span>Fax: <a href="tel:123-456-7890">(+100) 123 456 7890</a> - <a href="tel:-100-123-456-7891">(+100) 123 456 7891</a> </span></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-6 col-sm-6">
                          <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                              <div className="footer__widget">
                                <div className="footer__widget-title footer__widget-title-4">
                                  <h4>Information</h4>
                                </div>
                                <div className="footer__widget-content">
                                  <div className="footer__link footer__link-4">
                                    <ul>
                                      <li><a href="#"> Custom Service </a></li>
                                      <li><a href="#">F.A.Q.’s</a></li>
                                      <li><a href="#">Ordering Tracking</a></li>
                                      <li><a href="#"> Contacts</a></li>
                                      <li><a href="#">Events</a></li>
                                      <li><a href="#">Popular</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                              <div className="footer__widget">
                                <div className="footer__widget-title footer__widget-title-4">
                                  <h4>Our Services</h4>
                                </div>
                                <div className="footer__widget-content">
                                  <div className="footer__link footer__link-4">
                                    <ul>
                                      <li><a href="#">Sitemap</a></li>
                                      <li><a href="#">Privacy Policy</a></li>
                                      <li><a href="#">Your Account</a></li>
                                      <li><a href="#">Advanced Search</a></li>
                                      <li><a href="#">Terms &amp; Condition</a></li>
                                      <li><a href="#"> Contact Us</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="row">
                      <div className="col-xl-7 col-lg-6 col-md-6 col-sm-6">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6">
                            <div className="footer__widget">
                              <div className="footer__widget-title footer__widget-title-4">
                                <h4>My Account</h4>
                              </div>
                              <div className="footer__widget-content">
                                <div className="footer__link footer__link-4">
                                  <ul>
                                    <li><a href="#"> About us </a></li>
                                    <li><a href="#">Delivery Information</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Discount</a></li>
                                    <li><a href="#">Custom Service</a></li>
                                    <li><a href="#">Terms &amp; Condition</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="footer__widget">
                              <div className="footer__widget-title footer__widget-title-4">
                                <h4>Payment &amp; Shipping</h4>
                              </div>
                              <div className="footer__widget-content">
                                <div className="footer__link footer__link-4">
                                  <ul>
                                    <li><a href="#">Terms Of Use</a></li>
                                    <li><a href="#">Payment Methods</a></li>
                                    <li><a href="#">Shipping Guide</a></li>
                                    <li><a href="#">Locations We Ship To</a></li>
                                    <li><a href="#">Estimated Delivery Time</a></li>
                                    <li><a href="#">Express</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6">
                        <div className="footer__widget">
                          <div className="footer__widget-title">
                            <h4>Sign Up For Newsletter</h4>
                          </div>
                          <div className="footer__widget-content">
                            <div className="footer__subscribe">
                              <p> <span>Join 40.00+ Subscribers</span> and get a new discount coupon on every Saturday.</p>
                              <div className="footer__subscribe-form">
                                <form action="#">
                                  <input type="email" placeholder="Your Email Address..." />
                                  <button type="submit">subscribe</button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__copyright footer__copyright-2 pt-30 pb-35 footer-bg-2">
              <div className="container custom-container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6">
                    <div className="footer__copyright-text footer__copyright-text-2">
                      <p>Copyright © <a href="index.html">Topico.</a> All Rights Reserved. <a href="#">ThemePure.</a></p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="footer__payment f-right">
                      <a href="#" className="m-img"><img src="/assets/img/icon/payment.png" alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* footer area end */}
        {/* JS here */}
        <Script src="/assets/js/vendor/jquery-3.6.0.min.js"  strategy="lazyOnload"/>
        <Script src="/assets/js/bootstrap.bundle.min.js"  strategy="lazyOnload"/>
        <Script src="/assets/js/slick.min.js"  strategy="lazyOnload"/>
        <Script src="/assets/js/backToTop.js"  strategy="lazyOnload"/>
        <Script src="/assets/js/jquery.fancybox.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/isotope.pkgd.min.js"  strategy="lazyOnload"/>
        <Script src="/assets/js/owl.carousel.min.js"  strategy="lazyOnload"/>
        <Script src="/assets/js/magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery-ui-slider-range.js" strategy="lazyOnload" />
        <Script src="/assets/js/ajax-form.js"  strategy="lazyOnload"/>
        <Script src="/assets/js/wow.min.js"  strategy="lazyOnload"/>
        <Script src="/assets/js/imagesloaded.pkgd.min.js"  strategy="lazyOnload"/>
        <Script src="/assets/js/nice-select.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/meanmenu.js"  strategy="lazyOnload"/>
        <Script src="/assets/js/vendor/waypoints.min.js"  strategy="lazyOnload"/>
        <Script src="/assets/js/countdown.js"  strategy="lazyOnload"/>
        <Script src="/assets/js/main.js"  strategy="lazyOnload"/>
      </div>
    );
  }

export default details;