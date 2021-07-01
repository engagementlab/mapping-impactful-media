<script lang="ts">
  // import { VERSION } from '../data';

  const links = [
    ['/', 'Home'],
    ['/about', 'About'],
  ];
  // console.log(VERSION);
</script>

<footer class="flex justify-center w-full p-10 bg-sunny">
  <div class="w-full md:w-1/2">
    <h3 class="font-bourbon">Mapping Impactful Media Literacy Practices</h3>
    <p class="pt-5 font-work-sans">
      Contact: Paul Mihailidis<br />paul_mihailidis@emerson.edu ​ ​
    </p>
    <ul class="pt-5 font-work-sans">
      {#each links as [path, name]}
        <li>
          <a href={path}>
            {name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
  <!-- {VERSION} -->
</footer>
