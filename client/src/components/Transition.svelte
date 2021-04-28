<script>
    import { BaseTransition } from '@roxi/routify/decorators';
    import { fade } from 'svelte/transition';
    const configs = [
        {
            condition: (meta) => true,
            transition: fade,
        },
    ];
</script>

<BaseTransition {configs}>
    <slot />
</BaseTransition>
