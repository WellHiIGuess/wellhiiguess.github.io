<script>
  import NavBar from "./NavBar.svelte";
  import { onMount } from "svelte";

  var message = {};

  onMount(async () => {
    const res = await fetch('http://127.0.0.1:8000/blog/');

    message = JSON.parse((await res.text()).valueOf());

    for (let i = 1; i < message.length + 1; i++) {
      let new_icon = document.createElement('div');

      new_icon.onclick = () => {
        location.href = `./blog-get?title=${message[i.toString()]['title']}&body=${message[i.toString()]['body']}`;
      };
      
      let title = document.createElement('h2');
      title.innerText = message[i.toString()]['title'];
      title.className = 'title-text';
      
      let date = document.createElement('a');
      date.innerText = message[i.toString()]['date'];
      date.className = 'date-text';

      new_icon.appendChild(title);
      new_icon.appendChild(date);

      new_icon.className = 'post-icon';
      document.getElementById('posts').appendChild(new_icon);
    }
  });
</script>

<div>
    <NavBar />
    <h1 style="position: absolute; font-size: 60px; top: 15%; left: 10%; font-family: sans-serif; color: white;">Blog</h1>
    <div id="posts"></div>
</div>
