<script>
    import { Cloudinary } from '@cloudinary/base';

    import { format, quality } from '@cloudinary/base/actions/delivery';
    import { auto as autoFormat } from '@cloudinary/base/qualifiers/format';
    import { auto as autoQuality } from '@cloudinary/base/qualifiers/quality';
    export let img_id;
    export let alt;

    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'engagement-lab-home',
        },
    });

    // Instantiate a CloudinaryImage object for the image with public ID, 'front_face'.
    const myImage = cld.image('mapping-impactful-media/img/' + img_id);

    myImage.delivery(format(autoFormat())); // optimzie with automatic delivery format
    myImage.delivery(quality(autoQuality())); // optimzie with automatic quality reduction
    myImage.addTransformation('w_auto,dpr_auto');

    const myURL = myImage.toURL();
</script>

<img sizes="100vw" src={myURL} {alt} />
