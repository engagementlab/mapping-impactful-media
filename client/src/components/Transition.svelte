<script>
    import { BaseTransition } from '@roxi/routify/decorators';
    import { cubicInOut, cubicOut } from 'svelte/easing';
    import { fade, fly } from 'svelte/transition';

    export function flyCustom(
        node,
        { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0 },
    ) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        return {
            delay,
            duration,
            easing,
            css: (t, u) =>
                `transform: ${transform} translate(${(1 - t) * x}px, ${
                    (1 - t) * y
                }px);`,
        };
    }
    export let scoped;
    const { width } = scoped;
    const configs = [
        {
            // No matching config. We don't want a transition
            condition: (meta) => true,
            transition: fade,
        },
    ];
</script>

<BaseTransition {configs}>
    <slot />
</BaseTransition>
