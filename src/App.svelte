<script>
  const cursorPositionHandler = e => {
    const decimalX = e.clientX / window.innerWidth - 0.5;
    const decimalY = e.clientY / window.innerHeight - 0.5;
    TweenMax.to(document.querySelector(".pattern__me"), 0.5, {
      rotationY: 15 * decimalX,
      rotationX: 15 * decimalY,
      ease: Quad.easeOut,
      transformPerspective: 700,
      transformOrigin: "center",
    });
  };

  document.body.addEventListener("mousemove", cursorPositionHandler);
</script>

<svelte:head>
  <title>Dmitry Shatokhin</title>
  <meta
    name="description"
    content="Dmitry Shtokhin. dmtrshat. Software developer. Helping Quarians
    Create the Geth."
  />
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat:300,400,900|Roboto&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<article class="page">
  <div class="pattern">
    <div class="pattern__me" />
  </div>

  <main class="content">
    <h1 class="name text">Dmitry Shatokhin</h1>

    <div class="info">
      <p class="content__text text">
        I’m a software engineer.
        <br />
        Geek, Crustacean, Pythonist, Javascripter.
        <br />
        As you can see, my main stack is Rust, Python, JavaScript.
      </p>
      <footer>
        <div class="footer__wrap">
          <a
            class="content__link text"
            href="https://twitter.com/dmtrshat"
            rel="noopener"
            target="_blank"
          >
            twitter
          </a>
          <a
            class="content__link text"
            href="https://github.com/dmtrshat"
            rel="noopener"
            target="_blank"
          >
            github
          </a>
          <a
            class="content__link text"
            href="https://t.me/dmtrshat"
            rel="noopener"
            target="_blank"
          >
            telegram
          </a>
          <a
            class="content__link text"
            href="https://www.linkedin.com/in/dmitry-shatokhin-45a784189"
            rel="noopener"
            target="_blank"
          >
            linkedin
          </a>
        </div>
      </footer>
    </div>
  </main>
</article>

<style>
  .text {
    font-family: "Montserrat", sans-serif;
  }

  .page {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }

  .pattern {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    width: 454px;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-image: url(../images/pattern.png);
  }

  .pattern__me {
    margin-top: 51px;
    width: 258px;
    height: 276px;
    background: url(../images/me.webp);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 2px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04),
      0px 16px 24px rgba(0, 0, 0, 0.04), 0px 24px 32px rgba(0, 0, 0, 0.04);
  }

  .content {
    position: relative;
    padding: 0 25px 0 25px;
    display: flex;
    height: 76%;
    flex-direction: column;
    justify-content: space-between;
  }

  .name {
    margin: 0;
    font-size: responsive 48px 120px;
    font-weight: 900;
    background-image: url(../images/shape.webp);
    background-position: center;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: cover;
    user-select: none;
    -webkit-text-fill-color: transparent;
  }

  .info {
    display: flex;
    height: 60%;
    flex-direction: column;
    justify-content: space-between;
  }

  .content__text {
    max-width: 52%;
    font-size: 35.3333px;
    font-size: responsive 16px 36px;
    font-weight: 300;
  }

  footer {
    display: flex;
    height: 22px;
    justify-content: center;
    align-items: center;
  }

  .footer__wrap {
    display: flex;
    width: 63%;
    justify-content: space-between;
  }

  .content__link {
    opacity: 0.6;
    font-size: responsive 10px 17.6667px;
    text-decoration: none;
    color: black;
    transition: all 0.1s;
  }

  .content__link:hover {
    opacity: 1;
    text-decoration: underline;
  }

  @media (max-width: 720px) {
    .pattern {
      top: 60%;
      left: 0;
      width: 100%;
      height: 158px;
      justify-content: flex-end;
    }

    .footer__wrap {
      width: 80%;
    }

    .info {
      height: 70%;
    }

    .pattern__me {
      margin-top: 0;
      margin-right: 25px;
      width: 133px;
      height: 142px;
    }

    .content {
      height: 80%;
    }
  }

  @media (max-width: 30px) {
    .pattern {
      top: 60%;
      left: 0;
      width: 100%;
      height: 120px;
    }

    .pattern__me {
      margin-top: 0;
      margin-right: 25px;
      width: 99px;
      height: 106px;
    }

    .content {
      height: 85%;
    }
  }
</style>
