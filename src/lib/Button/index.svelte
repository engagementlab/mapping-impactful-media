<script lang="ts">
  export let label;
  export let link;
  export let className;
</script>

<a
  href={link}
  class="inline-block border-2 border-black px-10 py-4 my-10 font-bourbon text-sm hover:bg-strawberry hover:text-white transition-all {className}"
>
  {label}
</a>
