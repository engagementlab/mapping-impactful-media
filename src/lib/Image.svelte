<script lang="ts">
  import pkg from '@cloudinary/base';
  const { Cloudinary, CloudinaryImage } = pkg;
  // import { format, q/uality } from '@cloudinary/base/actions/delivery';
  // import { auto as autoFormat } from '@cloudinary/base/qualifiers/format';
  // import { auto as autoQuality } from '@cloudinary/base/qualifiers/quality';

  // import { AdvancedImage, lazyload, placeholder, accessibility } from '@cloudinary/svelte/dist/';
  export let responsive = false;
  export let className;
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

  // Merge classes
  let allClasses = className ? className : '';
  if (responsive) allClasses = `${allClasses} cld-responsive`;

  // Create image transforms
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
  aria-roledescription="image"
  class={allClasses}
  data-src={responsive ? cloudUrl : undefined}
  src={!responsive ? cloudUrl : undefined}
  {alt}
/>
<!-- <AdvancedImage cldImg={img} /> -->
