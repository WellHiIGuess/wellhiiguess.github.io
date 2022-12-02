<script>
  import NavBar from "./NavBar.svelte";

  const url = new URL(location.href);
  const title = url.searchParams.get('title');
  const body = url.searchParams.get('body');
</script>

<div>
  <NavBar />
  <h1 id="title">{title}</h1>
  <a id="body">{body}</a>
</div>

<style>
  #title {
    color: white;
    position: absolute;
    top: 70px;
    left: 5%;
    font-family: var(--font);
    font-size: 50px;
    width: 90%;
  }

  #body {
    color: white;
    position: absolute;
    top: 200px;
    left: 5%;
    font-family: var(--font);
    font-size: 20px;
    word-wrap: break-word;
    width: 90%;
  }
</style>
