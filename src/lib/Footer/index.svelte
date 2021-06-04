<script lang="ts">
  const links = [
    ['/', 'Home'],
    ['/about', 'About'],
  ];
</script>

<footer class="flex flex-col w-full p-10  bg-sunny">
  <h3 class="font-bourbon">Mapping Impactful Media Literacy Practices</h3>
  <p class="pt-5 font-work-sans">
    Contact: ​ Paul Mihailidis paul_mihailidis@emerson.edu ​ ​
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
</footer>
