<script lang="ts">
  import pkg from '@cloudinary/base';
  const { Cloudinary, CloudinaryImage } = pkg;
  // import { format, q/uality } from '@cloudinary/base/actions/delivery';
  // import { auto as autoFormat } from '@cloudinary/base/qualifiers/format';
  // import { auto as autoQuality } from '@cloudinary/base/qualifiers/quality';

  // import { AdvancedImage, lazyload, placeholder, accessibility } from '@cloudinary/svelte/dist/';
  export let responsive = false;
  export let imgId;
  export let width;
  export let alt;
  export let transforms;

  // Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'engagement-lab-home',
    },
    url: {
      secure: true,
    },
  });

  // Instantiate a CloudinaryImage object for the image with public ID;
  // append dir prefix if missing
  const prefix =
    imgId.indexOf('mapping-impactful-media/img/') > -1
      ? ''
      : 'mapping-impactful-media/img/';
  const cloudImage = cld.image(`${prefix}${imgId}`);

  // cloudImage.addTransformation();
  cloudImage.addTransformation(
    transforms || `w_${width ? width : 'auto'},f_auto,dpr_auto`
  );

  const cloudUrl = cloudImage.toURL();

  const img = new CloudinaryImage('img/' + imgId, {
    cloudName: 'engagement-lab-home',
  });
</script>

<!-- <Image cloud_name="mapping-impactful-media" public_id={} /> -->

<img
  sizes="100vw"
  class={responsive ? 'cld-responsive' : ''}
  data-src={responsive ? cloudUrl : undefined}
  src={!responsive ? cloudUrl : undefined}
  {alt}
/>
<!-- <AdvancedImage cldImg={img} /> -->
