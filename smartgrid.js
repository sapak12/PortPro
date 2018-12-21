var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    filename: "_smart-grid",
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */

        /*
        filename: "smart-grid",
        outputStyle: "less",
        columns: 12,
        offset: "30px",
        mobileFirst: false,
        container: {
            maxWidth: "1280px",
            fields: "30px"
        },
        breakPoints: {
            lg: {
                width: "1200px"
            },
            md: {
                width: "992px",
                fields: "15px"
            },
            sm: {
                width: "720px"
            },
            xs: {
                width: "576px"
            }
        },
        mixinNames: {
            container: "wrapper",
            row: "row-flex",
            rowFloat: "row-float",
            rowInlineBlock: "row-ib",
            rowOffsets: "row-offsets",
            column: "col",
            size: "size",
            columnFloat: "col-float",
            columnInlineBlock: "col-ib",
            columnPadding: "col-padding",
            columnOffsets: "col-offsets",
            shift: "shift",
            from: "from",
            to: "to",
            fromTo: "from-to",
            reset: "reset",
            clearfix: "clearfix",
            debug: "debug"
        },
        tab: "    ",
        defaultMediaDevice: "screen",
        detailedCalc: false
        */
    }
};

smartgrid('./app/sass/', settings);