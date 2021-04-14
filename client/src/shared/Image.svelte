<script>
    import { Cloudinary } from '@cloudinary/base';
    import { format, quality } from '@cloudinary/base/actions/delivery';
    import { auto as autoFormat } from '@cloudinary/base/qualifiers/format';
    import { auto as autoQuality } from '@cloudinary/base/qualifiers/quality';
    export let imgId;
    export let width;
    export let alt;

    // Cloudinary instance.
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'engagement-lab-home',
        },
    });

    // Instantiate a CloudinaryImage object for the image with public ID
    const cloudImage = cld.image('mapping-impactful-media/img/' + imgId);

    // cloudImage.delivery(format(autoFormat())); // optimzie with automatic delivery format
    // cloudImage.delivery(quality(autoQuality())); // optimzie with automatic quality reduction
    cloudImage.addTransformation(`w_${width ? width : 'auto'},dpr_auto`);

    const cloudUrl = cloudImage.toURL();
</script>

<img sizes="100vw" src={cloudUrl} {alt} />
