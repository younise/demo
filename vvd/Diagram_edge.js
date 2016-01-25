/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            "https://code.jquery.com/jquery-2.1.4.js",
            js+"code.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'TopStrip',
                            type: 'image',
                            rect: ['0px', '19px', '1920px', '92px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"TopStrip.svg",'0px','0px']
                        },
                        {
                            id: 'VMware_Logo',
                            type: 'image',
                            rect: ['46px', '52px', '170px', '26px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"VMware_Logo.svg",'0px','0px']
                        },
                        {
                            id: 'Title',
                            type: 'image',
                            rect: ['586px', '38px', '748px', '54px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Title.svg",'0px','0px']
                        },
                        {
                            id: 'BottomColored_Strip',
                            type: 'image',
                            rect: ['-37px', '1071px', '2000px', '9px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BottomColored_Strip.svg",'0px','0px']
                        },
                        {
                            id: 'Fotter',
                            type: 'image',
                            rect: ['206', '1014px', '1530px', '26px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Fotter.svg",'0px','0px']
                        },
                        {
                            id: 'Switch_Orange',
                            type: 'image',
                            rect: ['482px', '140px', '102px', '101px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Switch_Orange.svg",'0px','0px']
                        },
                        {
                            id: 'Switch_Orange2',
                            type: 'image',
                            rect: ['742px', '140px', '102px', '101px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Switch_Orange.svg",'0px','0px']
                        },
                        {
                            id: 'Switch_Blue',
                            type: 'image',
                            rect: ['1130px', '140px', '102px', '101px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Switch_Blue.svg",'0px','0px']
                        },
                        {
                            id: 'edge',
                            symbolName: 'edge',
                            display: 'none',
                            type: 'rect',
                            rect: ['670', '491px', '223', '494', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Switch_Blue2',
                            type: 'image',
                            rect: ['1378px', '141px', '102px', '101px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Switch_Blue.svg",'0px','0px']
                        },
                        {
                            id: 'compute_comp',
                            symbolName: 'compute_comp',
                            display: 'none',
                            type: 'rect',
                            rect: ['937', '481px', '463', '494', 'auto', 'auto']
                        },
                        {
                            id: 'Doted_Line',
                            type: 'image',
                            rect: ['1257px', '227px', '50px', '8px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Doted_Line.svg",'0px','0px']
                        },
                        {
                            id: 'Management2',
                            symbolName: 'Management',
                            display: 'none',
                            type: 'rect',
                            rect: ['413', '501px', '224', '494', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'Storage2',
                            symbolName: 'Storage',
                            display: 'none',
                            type: 'rect',
                            rect: ['1422', '481px', '227', '493', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Bottom_line',
                            display: 'none',
                            type: 'image',
                            rect: ['222px', '473px', '1475px', '87px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Bottom_line.svg",'0px','0px']
                        },
                        {
                            id: 'Leaf',
                            display: 'none',
                            type: 'image',
                            rect: ['240px', '582px', '69px', '38px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Leaf.svg",'0px','0px']
                        },
                        {
                            id: 'Top_Line',
                            display: 'none',
                            type: 'image',
                            rect: ['224px', '179px', '1475px', '105px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Top_Line.svg",'0px','0px']
                        },
                        {
                            id: 'Spine',
                            display: 'none',
                            type: 'image',
                            rect: ['237px', '307px', '79px', '36px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Spine.svg",'0px','0px']
                        },
                        {
                            id: 'Manage_Switch',
                            symbolName: 'Manage_Switch',
                            display: 'none',
                            type: 'rect',
                            rect: ['462', '533px', '142', '110', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'edge_switch',
                            symbolName: 'edge_switch',
                            display: 'none',
                            type: 'rect',
                            rect: ['713', '523px', '142', '110', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'compute_switch1',
                            symbolName: 'compute_switch1',
                            display: 'none',
                            type: 'rect',
                            rect: ['981', '523px', '142', '110', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'compute_switch2',
                            symbolName: 'compute_switch2',
                            display: 'none',
                            type: 'rect',
                            rect: ['1219', '523px', '142', '110', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'storage_switch',
                            symbolName: 'storage_switch',
                            display: 'none',
                            type: 'rect',
                            rect: ['1475', '514px', '142', '110', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'line_Manage3',
                            display: 'none',
                            type: 'image',
                            rect: ['504px', '281px', '926px', '216px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"line_Manage3.svg",'0px','0px']
                        },
                        {
                            id: 'line_edge2',
                            display: 'none',
                            type: 'image',
                            rect: ['530px', '281px', '899px', '217px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"line_edge.svg",'0px','0px']
                        },
                        {
                            id: 'line_compute',
                            display: 'none',
                            type: 'image',
                            rect: ['1034px', '281px', '397px', '218px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"line_compute.svg",'0px','0px']
                        },
                        {
                            id: 'line_storage',
                            display: 'none',
                            type: 'image',
                            rect: ['1180px', '281px', '404px', '218px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"line_storage.svg",'0px','0px']
                        },
                        {
                            id: 'full_mainCopy3',
                            symbolName: 'full_main',
                            type: 'rect',
                            rect: ['1839', '35', '55', '54', 'auto', 'auto']
                        },
                        {
                            id: 'Management_hotspot',
                            type: 'rect',
                            rect: ['413px', '441px', '224px', '494px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'edge_hotspot',
                            display: 'none',
                            type: 'rect',
                            rect: ['670px', '441px', '223px', '493px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'compute_hotspot',
                            display: 'none',
                            type: 'rect',
                            rect: ['937px', '441px', '463px', '493px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'storage_hotspot',
                            display: 'none',
                            type: 'rect',
                            rect: ['1422px', '440px', '227px', '494px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Transport_zone',
                            symbolName: 'Transport_zone',
                            display: 'none',
                            type: 'rect',
                            rect: ['655px', '576', '764', '57', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Rectangle_Grey',
                            display: 'none',
                            type: 'rect',
                            rect: ['-10px', '-11px', '1940px', '1101px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(78,78,78,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'manage_detail',
                            symbolName: 'manage_detail',
                            display: 'none',
                            type: 'rect',
                            rect: ['24px', '215px', '1006', '940', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.23161','0.23161']]
                        },
                        {
                            id: 'edge_detail',
                            symbolName: 'edge_detail',
                            display: 'none',
                            type: 'rect',
                            rect: ['282px', '76px', '1006', '908', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.21769','0.2177']]
                        },
                        {
                            id: 'compute_Detail2',
                            symbolName: 'compute_Detail',
                            display: 'none',
                            type: 'rect',
                            rect: ['678px', '264px', '1006', '968', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.27435','0.27435']]
                        },
                        {
                            id: 'storage_detail2',
                            symbolName: 'storage_detail',
                            display: 'none',
                            type: 'rect',
                            rect: ['843px', '195px', '1385', '976', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.15957','0.15957']]
                        },
                        {
                            id: 'transportzone_details',
                            symbolName: 'transportzone_details',
                            display: 'none',
                            type: 'rect',
                            rect: ['371px', '111px', '1385', '988', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.08664','0.08664']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(219,219,219,1.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 20500,
                    autoPlay: true,
                    labels: {
                        "popup1": 4500,
                        "B1": 4940,
                        "popup2": 5025,
                        "B2": 5465,
                        "popup3": 5567,
                        "B3": 6007,
                        "popup4": 6088,
                        "B4": 6529,
                        "popup5": 6615,
                        "B5": 7056
                    },
                    data: [
                        [
                            "eid109",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${line_storage}",
                            'none',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            3500,
                            0,
                            "easeInQuad",
                            "${line_storage}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${Manage_Switch}",
                            'none',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            1160,
                            0,
                            "easeInQuad",
                            "${Manage_Switch}",
                            'none',
                            'block'
                        ],
                        [
                            "eid307",
                            "display",
                            0,
                            0,
                            "linear",
                            "${transportzone_details}",
                            'none',
                            'none'
                        ],
                        [
                            "eid306",
                            "display",
                            6615,
                            0,
                            "linear",
                            "${transportzone_details}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "opacity",
                            4134,
                            266,
                            "easeInQuad",
                            "${Leaf}",
                            '0',
                            '1'
                        ],
                        [
                            "eid147",
                            "opacity",
                            2418,
                            338,
                            "easeInQuad",
                            "${Transport_zone}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "top",
                            1830,
                            289,
                            "easeInQuad",
                            "${compute_switch2}",
                            '523px',
                            '473px'
                        ],
                        [
                            "eid280",
                            "display",
                            0,
                            0,
                            "linear",
                            "${storage_detail2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid279",
                            "display",
                            6088,
                            0,
                            "linear",
                            "${storage_detail2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "display",
                            6568,
                            0,
                            "linear",
                            "${storage_detail2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            330,
                            0,
                            "easeInQuad",
                            "${edge}",
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            1495,
                            0,
                            "easeInQuad",
                            "${edge}",
                            'none',
                            'block'
                        ],
                        [
                            "eid254",
                            "display",
                            0,
                            0,
                            "linear",
                            "${compute_Detail2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid253",
                            "display",
                            5567,
                            0,
                            "linear",
                            "${compute_Detail2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid272",
                            "display",
                            6047,
                            0,
                            "linear",
                            "${compute_Detail2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            1160,
                            0,
                            "easeInQuad",
                            "${Management_hotspot}",
                            'none',
                            'block'
                        ],
                        [
                            "eid32",
                            "opacity",
                            370,
                            370,
                            "linear",
                            "${Switch_Blue}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Spine}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3",
                            "display",
                            3911,
                            0,
                            "linear",
                            "${Spine}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20",
                            "top",
                            130,
                            370,
                            "linear",
                            "${Switch_Orange2}",
                            '140px',
                            '180px'
                        ],
                        [
                            "eid84",
                            "top",
                            2119,
                            293,
                            "easeInQuad",
                            "${storage_switch}",
                            '514px',
                            '474px'
                        ],
                        [
                            "eid26",
                            "opacity",
                            500,
                            370,
                            "linear",
                            "${Switch_Blue2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid114",
                            "opacity",
                            3500,
                            250,
                            "easeInQuad",
                            "${line_storage}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${compute_switch1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            1830,
                            0,
                            "easeInQuad",
                            "${compute_switch1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid137",
                            "top",
                            1160,
                            340,
                            "easeInQuad",
                            "${Management_hotspot}",
                            '501px',
                            '441px'
                        ],
                        [
                            "eid249",
                            "opacity",
                            5025,
                            440,
                            "linear",
                            "${edge_detail}",
                            '0',
                            '1'
                        ],
                        [
                            "eid222",
                            "display",
                            0,
                            0,
                            "linear",
                            "${manage_detail}",
                            'none',
                            'none'
                        ],
                        [
                            "eid221",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${manage_detail}",
                            'none',
                            'block'
                        ],
                        [
                            "eid234",
                            "display",
                            4977,
                            0,
                            "linear",
                            "${manage_detail}",
                            'block',
                            'none'
                        ],
                        [
                            "eid291",
                            "left",
                            6088,
                            441,
                            "linear",
                            "${storage_detail2}",
                            '843px',
                            '279px'
                        ],
                        [
                            "eid68",
                            "top",
                            1830,
                            289,
                            "easeInQuad",
                            "${compute_switch1}",
                            '523px',
                            '473px'
                        ],
                        [
                            "eid90",
                            "opacity",
                            2119,
                            293,
                            "easeInQuad",
                            "${Storage2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid267",
                            "left",
                            5567,
                            440,
                            "linear",
                            "${compute_Detail2}",
                            '678px',
                            '456px'
                        ],
                        [
                            "eid164",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${compute_comp}",
                            'none',
                            'none'
                        ],
                        [
                            "eid163",
                            "display",
                            1830,
                            0,
                            "easeInQuad",
                            "${compute_comp}",
                            'none',
                            'block'
                        ],
                        [
                            "eid313",
                            "left",
                            6615,
                            440,
                            "linear",
                            "${transportzone_details}",
                            '371px',
                            '284px'
                        ],
                        [
                            "eid78",
                            "opacity",
                            1830,
                            289,
                            "easeInQuad",
                            "${compute_switch2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid186",
                            "top",
                            2119,
                            293,
                            "easeInQuad",
                            "${storage_hotspot}",
                            '480px',
                            '440px'
                        ],
                        [
                            "eid50",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${compute_switch2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            1830,
                            0,
                            "easeInQuad",
                            "${compute_switch2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "top",
                            1160,
                            340,
                            "easeInQuad",
                            "${Manage_Switch}",
                            '533px',
                            '473px'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Top_Line}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${Top_Line}",
                            'none',
                            'block'
                        ],
                        [
                            "eid86",
                            "top",
                            2119,
                            293,
                            "easeInQuad",
                            "${Storage2}",
                            '481px',
                            '441px'
                        ],
                        [
                            "eid52",
                            "top",
                            1160,
                            340,
                            "easeInQuad",
                            "${Management2}",
                            '501px',
                            '441px'
                        ],
                        [
                            "eid295",
                            "opacity",
                            6088,
                            441,
                            "linear",
                            "${storage_detail2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            1495,
                            335,
                            "easeInQuad",
                            "${edge_switch}",
                            '0',
                            '1'
                        ],
                        [
                            "eid239",
                            "display",
                            0,
                            0,
                            "linear",
                            "${edge_detail}",
                            'none',
                            'none'
                        ],
                        [
                            "eid238",
                            "display",
                            5025,
                            0,
                            "linear",
                            "${edge_detail}",
                            'none',
                            'block'
                        ],
                        [
                            "eid250",
                            "display",
                            5510,
                            0,
                            "linear",
                            "${edge_detail}",
                            'block',
                            'none'
                        ],
                        [
                            "eid60",
                            "top",
                            1495,
                            335,
                            "easeInQuad",
                            "${edge_switch}",
                            '523px',
                            '473px'
                        ],
                        [
                            "eid243",
                            "scaleY",
                            5025,
                            440,
                            "linear",
                            "${edge_detail}",
                            '0.2177',
                            '1'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${Management2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            1160,
                            0,
                            "easeInQuad",
                            "${Management2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid24",
                            "top",
                            370,
                            370,
                            "linear",
                            "${Switch_Blue}",
                            '140px',
                            '180px'
                        ],
                        [
                            "eid88",
                            "opacity",
                            2119,
                            293,
                            "easeInQuad",
                            "${storage_switch}",
                            '0',
                            '1'
                        ],
                        [
                            "eid190",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'none',
                            'block'
                        ],
                        [
                            "eid233",
                            "display",
                            4977,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'block',
                            'none'
                        ],
                        [
                            "eid235",
                            "display",
                            5025,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'none',
                            'block'
                        ],
                        [
                            "eid237",
                            "display",
                            5510,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'block',
                            'none'
                        ],
                        [
                            "eid251",
                            "display",
                            5567,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'none',
                            'block'
                        ],
                        [
                            "eid296",
                            "display",
                            6047,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'block',
                            'none'
                        ],
                        [
                            "eid273",
                            "display",
                            6089,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'none',
                            'block'
                        ],
                        [
                            "eid297",
                            "display",
                            6568,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'block',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            6615,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'none',
                            'block'
                        ],
                        [
                            "eid301",
                            "display",
                            7100,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'block',
                            'none'
                        ],
                        [
                            "eid172",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${compute_hotspot}",
                            'none',
                            'none'
                        ],
                        [
                            "eid171",
                            "display",
                            1830,
                            0,
                            "easeInQuad",
                            "${compute_hotspot}",
                            'none',
                            'block'
                        ],
                        [
                            "eid224",
                            "scaleX",
                            4500,
                            440,
                            "easeInQuad",
                            "${manage_detail}",
                            '0.23161',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            130,
                            370,
                            "linear",
                            "${Switch_Orange2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid265",
                            "scaleY",
                            5567,
                            440,
                            "linear",
                            "${compute_Detail2}",
                            '0.27435',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            1160,
                            340,
                            "easeInQuad",
                            "${Management2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "top",
                            500,
                            370,
                            "linear",
                            "${Switch_Blue2}",
                            '141px',
                            '181px'
                        ],
                        [
                            "eid228",
                            "left",
                            4500,
                            440,
                            "easeInQuad",
                            "${manage_detail}",
                            '24px',
                            '456px'
                        ],
                        [
                            "eid145",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${Transport_zone}",
                            'none',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            2412,
                            0,
                            "easeInQuad",
                            "${Transport_zone}",
                            'none',
                            'block'
                        ],
                        [
                            "eid230",
                            "top",
                            4500,
                            440,
                            "easeInQuad",
                            "${manage_detail}",
                            '215px',
                            '59px'
                        ],
                        [
                            "eid34",
                            "left",
                            875,
                            280,
                            "linear",
                            "${Doted_Line}",
                            '1257px',
                            '1277px'
                        ],
                        [
                            "eid309",
                            "scaleX",
                            6615,
                            440,
                            "linear",
                            "${transportzone_details}",
                            '0.08664',
                            '1'
                        ],
                        [
                            "eid269",
                            "top",
                            5567,
                            440,
                            "linear",
                            "${compute_Detail2}",
                            '264px',
                            '45px'
                        ],
                        [
                            "eid293",
                            "top",
                            6088,
                            441,
                            "linear",
                            "${storage_detail2}",
                            '195px',
                            '46px'
                        ],
                        [
                            "eid287",
                            "scaleX",
                            6088,
                            441,
                            "linear",
                            "${storage_detail2}",
                            '0.15957',
                            '1'
                        ],
                        [
                            "eid124",
                            "top",
                            3911,
                            250,
                            "easeInQuad",
                            "${Spine}",
                            '307px',
                            '287px'
                        ],
                        [
                            "eid263",
                            "scaleX",
                            5567,
                            440,
                            "linear",
                            "${compute_Detail2}",
                            '0.27435',
                            '1'
                        ],
                        [
                            "eid317",
                            "opacity",
                            6615,
                            440,
                            "linear",
                            "${transportzone_details}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "opacity",
                            3911,
                            250,
                            "easeInQuad",
                            "${Spine}",
                            '0',
                            '1'
                        ],
                        [
                            "eid80",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${Storage2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid79",
                            "display",
                            2119,
                            0,
                            "easeInQuad",
                            "${Storage2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid112",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${line_Manage3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            2750,
                            0,
                            "easeInQuad",
                            "${line_Manage3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid245",
                            "left",
                            5025,
                            440,
                            "linear",
                            "${edge_detail}",
                            '282px',
                            '456px'
                        ],
                        [
                            "eid22",
                            "top",
                            0,
                            370,
                            "linear",
                            "${Switch_Orange}",
                            '140px',
                            '180px'
                        ],
                        [
                            "eid170",
                            "opacity",
                            1830,
                            289,
                            "easeInQuad",
                            "${compute_comp}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            1160,
                            340,
                            "easeInQuad",
                            "${Manage_Switch}",
                            '0',
                            '1'
                        ],
                        [
                            "eid128",
                            "opacity",
                            4000,
                            250,
                            "easeInQuad",
                            "${Bottom_line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid82",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${storage_switch}",
                            'none',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            2119,
                            0,
                            "easeInQuad",
                            "${storage_switch}",
                            'none',
                            'block'
                        ],
                        [
                            "eid66",
                            "opacity",
                            1495,
                            335,
                            "easeInQuad",
                            "${edge}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${edge_switch}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            1495,
                            0,
                            "easeInQuad",
                            "${edge_switch}",
                            'none',
                            'block'
                        ],
                        [
                            "eid30",
                            "opacity",
                            0,
                            370,
                            "linear",
                            "${Switch_Orange}",
                            '0',
                            '1'
                        ],
                        [
                            "eid232",
                            "opacity",
                            4500,
                            440,
                            "easeInQuad",
                            "${manage_detail}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "top",
                            4134,
                            266,
                            "easeInQuad",
                            "${Leaf}",
                            '582px',
                            '562px'
                        ],
                        [
                            "eid118",
                            "opacity",
                            3250,
                            250,
                            "easeInQuad",
                            "${line_compute}",
                            '0',
                            '1'
                        ],
                        [
                            "eid241",
                            "scaleX",
                            5025,
                            440,
                            "linear",
                            "${edge_detail}",
                            '0.21769',
                            '1'
                        ],
                        [
                            "eid247",
                            "top",
                            5025,
                            440,
                            "linear",
                            "${edge_detail}",
                            '264px',
                            '76px'
                        ],
                        [
                            "eid226",
                            "scaleY",
                            4500,
                            440,
                            "easeInQuad",
                            "${manage_detail}",
                            '0.23161',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            875,
                            280,
                            "linear",
                            "${Doted_Line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid111",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${line_edge2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            3000,
                            0,
                            "easeInQuad",
                            "${line_edge2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid110",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${line_compute}",
                            'none',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            3250,
                            0,
                            "easeInQuad",
                            "${line_compute}",
                            'none',
                            'block'
                        ],
                        [
                            "eid311",
                            "scaleY",
                            6615,
                            440,
                            "linear",
                            "${transportzone_details}",
                            '0.08664',
                            '1'
                        ],
                        [
                            "eid191",
                            "opacity",
                            4500,
                            440,
                            "linear",
                            "${Rectangle_Grey}",
                            '0',
                            '0.9024389982223511'
                        ],
                        [
                            "eid236",
                            "opacity",
                            5025,
                            440,
                            "linear",
                            "${Rectangle_Grey}",
                            '0',
                            '0.9024389982223511'
                        ],
                        [
                            "eid252",
                            "opacity",
                            5567,
                            440,
                            "linear",
                            "${Rectangle_Grey}",
                            '0',
                            '0.9024389982223511'
                        ],
                        [
                            "eid274",
                            "opacity",
                            6089,
                            440,
                            "linear",
                            "${Rectangle_Grey}",
                            '0',
                            '0.9024389982223511'
                        ],
                        [
                            "eid300",
                            "opacity",
                            6615,
                            440,
                            "linear",
                            "${Rectangle_Grey}",
                            '0',
                            '0.9024389982223511'
                        ],
                        [
                            "eid62",
                            "top",
                            1495,
                            335,
                            "easeInQuad",
                            "${edge}",
                            '491px',
                            '441px'
                        ],
                        [
                            "eid146",
                            "left",
                            2418,
                            338,
                            "easeInQuad",
                            "${Transport_zone}",
                            '679px',
                            '655px'
                        ],
                        [
                            "eid315",
                            "top",
                            6615,
                            440,
                            "linear",
                            "${transportzone_details}",
                            '111px',
                            '43px'
                        ],
                        [
                            "eid122",
                            "opacity",
                            3750,
                            250,
                            "easeInQuad",
                            "${Top_Line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "top",
                            1830,
                            289,
                            "easeInQuad",
                            "${compute_comp}",
                            '481px',
                            '441px'
                        ],
                        [
                            "eid174",
                            "top",
                            2119,
                            10,
                            "easeInQuad",
                            "${compute_comp}",
                            '441px',
                            '440px'
                        ],
                        [
                            "eid120",
                            "opacity",
                            2750,
                            250,
                            "easeInQuad",
                            "${line_Manage3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid289",
                            "scaleY",
                            6088,
                            441,
                            "linear",
                            "${storage_detail2}",
                            '0.15957',
                            '1'
                        ],
                        [
                            "eid271",
                            "opacity",
                            5567,
                            440,
                            "linear",
                            "${compute_Detail2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid180",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${storage_hotspot}",
                            'none',
                            'none'
                        ],
                        [
                            "eid179",
                            "display",
                            2119,
                            0,
                            "easeInQuad",
                            "${storage_hotspot}",
                            'none',
                            'block'
                        ],
                        [
                            "eid182",
                            "top",
                            1830,
                            289,
                            "easeInQuad",
                            "${compute_hotspot}",
                            '491px',
                            '441px'
                        ],
                        [
                            "eid116",
                            "opacity",
                            3000,
                            250,
                            "easeInQuad",
                            "${line_edge2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Leaf}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            4134,
                            0,
                            "linear",
                            "${Leaf}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "top",
                            1495,
                            335,
                            "easeInQuad",
                            "${edge_hotspot}",
                            '491px',
                            '441px'
                        ],
                        [
                            "eid74",
                            "opacity",
                            1830,
                            289,
                            "easeInQuad",
                            "${compute_switch1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Bottom_line}",
                            'none',
                            'none'
                        ],
                        [
                            "eid6",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${Bottom_line}",
                            'none',
                            'block'
                        ],
                        [
                            "eid155",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${edge_hotspot}",
                            'none',
                            'none'
                        ],
                        [
                            "eid154",
                            "display",
                            1495,
                            0,
                            "easeInQuad",
                            "${edge_hotspot}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "full_screen": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Pasted7',
                            opacity: '0',
                            rect: ['0px', '0px', '55px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted73.svg', '0px', '0px']
                        },
                        {
                            rect: ['6px', '6px', '44px', '44', 'auto', 'auto'],
                            id: 'Symbol_1',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            transform: [[], [], [], ['1.13636', '1.13636']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '55px', '54px']
                        }
                    }
                },
                timeline: {
                    duration: 73,
                    autoPlay: true,
                    labels: {
                        "expand": 9,
                        "exit": 65
                    },
                    data: [
                        [
                            "eid100",
                            "scaleX",
                            0,
                            73,
                            "linear",
                            "${Symbol_1}",
                            '0.94737',
                            '1.13636'
                        ],
                        [
                            "eid94",
                            "width",
                            0,
                            73,
                            "linear",
                            "${Symbol_1}",
                            '38px',
                            '44px'
                        ],
                        [
                            "eid97",
                            "left",
                            0,
                            73,
                            "linear",
                            "${Symbol_1}",
                            '7px',
                            '6px'
                        ],
                        [
                            "eid91",
                            "height",
                            0,
                            73,
                            "linear",
                            "${Symbol_1}",
                            '38px',
                            '44px'
                        ],
                        [
                            "eid101",
                            "scaleY",
                            0,
                            73,
                            "linear",
                            "${Symbol_1}",
                            '0.94737',
                            '1.13636'
                        ],
                        [
                            "eid104",
                            "top",
                            0,
                            73,
                            "linear",
                            "${Symbol_1}",
                            '6px',
                            '5px'
                        ]
                    ]
                }
            },
            "full_main": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '55', '54', 'auto', 'auto'],
                            id: 'full_screen',
                            display: 'block',
                            symbolName: 'full_screen',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            rect: ['6px', '5px', '44', '44', 'auto', 'auto'],
                            transform: [[], [], [], ['1.22727', '1.22727']],
                            id: 'exit_fullscreen',
                            display: 'none',
                            symbolName: 'exit_fullscreen',
                            cursor: 'pointer',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '55px', '54px']
                        }
                    }
                },
                timeline: {
                    duration: 1830,
                    autoPlay: true,
                    labels: {
                        "full": 0,
                        "exit_close": 132
                    },
                    data: [
                        [
                            "eid498",
                            "display",
                            124,
                            0,
                            "linear",
                            "${full_screen}",
                            'block',
                            'none'
                        ],
                        [
                            "eid471",
                            "top",
                            1830,
                            0,
                            "linear",
                            "${full_screen}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid545",
                            "left",
                            142,
                            0,
                            "linear",
                            "${exit_fullscreen}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid496",
                            "display",
                            0,
                            0,
                            "linear",
                            "${exit_fullscreen}",
                            'none',
                            'none'
                        ],
                        [
                            "eid497",
                            "display",
                            132,
                            0,
                            "linear",
                            "${exit_fullscreen}",
                            'none',
                            'block'
                        ],
                        [
                            "eid539",
                            "scaleY",
                            142,
                            0,
                            "linear",
                            "${exit_fullscreen}",
                            '1.22727',
                            '1.22727'
                        ],
                        [
                            "eid538",
                            "scaleX",
                            142,
                            0,
                            "linear",
                            "${exit_fullscreen}",
                            '1.22727',
                            '1.22727'
                        ],
                        [
                            "eid543",
                            "top",
                            142,
                            0,
                            "linear",
                            "${exit_fullscreen}",
                            '5px',
                            '5px'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '44px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,148,210,1.00)']
                        },
                        {
                            rect: ['3px', '3px', '38px', '38px', 'auto', 'auto'],
                            id: 'Pasted8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted83.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '44px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "exit_fullscreen": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'exit_full',
                            rect: ['0px', '0px', '44px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/exit_full3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '44px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 84,
                    autoPlay: true,
                    labels: {
                        "in": 0,
                        "out": 84
                    },
                    data: [
                        [
                            "eid514",
                            "width",
                            0,
                            84,
                            "linear",
                            "${exit_full}",
                            '44px',
                            '38px'
                        ],
                        [
                            "eid513",
                            "height",
                            0,
                            84,
                            "linear",
                            "${exit_full}",
                            '44px',
                            '38px'
                        ],
                        [
                            "eid520",
                            "top",
                            0,
                            84,
                            "linear",
                            "${exit_full}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid519",
                            "left",
                            0,
                            84,
                            "linear",
                            "${exit_full}",
                            '0px',
                            '3px'
                        ]
                    ]
                }
            },
            "Management": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Management',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '224px', '494px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Management.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '224px', '494px']
                        }
                    }
                },
                timeline: {
                    duration: 423.67971990792,
                    autoPlay: true,
                    labels: {
                        "hover": 0,
                        "normal": 395
                    },
                    data: [
                        [
                            "eid133",
                            "filter.contrast",
                            0,
                            395,
                            "easeInQuad",
                            "${Management}",
                            '1',
                            '1.3013698630137'
                        ]
                    ]
                }
            },
            "Manage_Switch": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Switch1',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '142px', '110px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Switch1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '142px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 426.54769189872,
                    autoPlay: true,
                    labels: {
                        "hover": 23,
                        "normal": 395
                    },
                    data: [
                        [
                            "eid142",
                            "filter.contrast",
                            0,
                            395,
                            "easeInQuad",
                            "${Switch1}",
                            '1',
                            '1.3013698630137'
                        ]
                    ]
                }
            },
            "edge": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Edge',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '223px', '494px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Edge.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '223px', '494px']
                        }
                    }
                },
                timeline: {
                    duration: 405,
                    autoPlay: true,
                    labels: {
                        "hover": 0,
                        "normal": 395
                    },
                    data: [
                        [
                            "eid153",
                            "filter.contrast",
                            0,
                            395,
                            "easeInQuad",
                            "${Edge}",
                            '1',
                            '1.3'
                        ]
                    ]
                }
            },
            "edge_switch": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Switch2',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '142px', '110px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Switch1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '142px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 402,
                    autoPlay: true,
                    labels: {
                        "hover": 0,
                        "normal": 395
                    },
                    data: [
                        [
                            "eid152",
                            "filter.contrast",
                            0,
                            395,
                            "easeInQuad",
                            "${Switch2}",
                            '1',
                            '1.3'
                        ]
                    ]
                }
            },
            "compute_switch1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Switch3',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '142px', '110px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Switch1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '142px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 408,
                    autoPlay: true,
                    labels: {
                        "hover": 0,
                        "normal": 395
                    },
                    data: [
                        [
                            "eid160",
                            "filter.contrast",
                            0,
                            395,
                            "easeInQuad",
                            "${Switch3}",
                            '1',
                            '1.3'
                        ]
                    ]
                }
            },
            "compute_switch2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Switch4',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '142px', '110px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Switch1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '142px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 408,
                    autoPlay: true,
                    labels: {
                        "hover": 0,
                        "normal": 395
                    },
                    data: [
                        [
                            "eid161",
                            "filter.contrast",
                            0,
                            408,
                            "easeInQuad",
                            "${Switch4}",
                            '1',
                            '1.3'
                        ]
                    ]
                }
            },
            "Storage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Storage',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '227px', '493px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Storage.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '227px', '493px']
                        }
                    }
                },
                timeline: {
                    duration: 408,
                    autoPlay: true,
                    labels: {
                        "hover": 0,
                        "normal": 395
                    },
                    data: [
                        [
                            "eid177",
                            "filter.contrast",
                            0,
                            395,
                            "easeInQuad",
                            "${Storage}",
                            '1',
                            '1.3'
                        ]
                    ]
                }
            },
            "storage_switch": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Switch5',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '142px', '110px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Switch1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '142px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 408,
                    autoPlay: true,
                    labels: {
                        "hover": 0,
                        "normal": 395
                    },
                    data: [
                        [
                            "eid178",
                            "filter.contrast",
                            0,
                            395,
                            "easeInQuad",
                            "${Switch5}",
                            '1',
                            '1.3'
                        ]
                    ]
                }
            },
            "Transport_zone": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '764px', '57px', 'auto', 'auto'],
                            filter: [0, 0, 1.3, 2.5, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Transport_Zone',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Transport_Zone.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '764px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 408,
                    autoPlay: true,
                    labels: {
                        "hover": 0,
                        "normal": 395
                    },
                    data: [
                        [
                            "eid176",
                            "filter.contrast",
                            0,
                            396,
                            "easeInQuad",
                            "${Transport_Zone}",
                            '1',
                            '1.3'
                        ],
                        [
                            "eid189",
                            "filter.saturate",
                            0,
                            395,
                            "easeInQuad",
                            "${Transport_Zone}",
                            '1',
                            '2.5'
                        ]
                    ]
                }
            },
            "compute_comp": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '463px', '494px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Compute',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Compute.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '463px', '494px']
                        }
                    }
                },
                timeline: {
                    duration: 408,
                    autoPlay: true,
                    labels: {
                        "hover": 0,
                        "normal": 395
                    },
                    data: [
                        [
                            "eid173",
                            "filter.contrast",
                            0,
                            395,
                            "easeInQuad",
                            "${Compute}",
                            '1',
                            '1.3'
                        ]
                    ]
                }
            },
            "close": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(105,185,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'Close_icon2',
                            rect: ['20px', '20px', '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Close_icon2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "manage_detail": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '26px', '979px', '914px', 'auto', 'auto'],
                            id: 'Rectangle_M',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'Manage_Diagram',
                            rect: ['24px', '49px', '930px', '869px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Manage_Diagram.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.66667', '0.66667']],
                            id: 'close_M',
                            symbolName: 'close',
                            cursor: 'pointer',
                            rect: ['931px', '-15px', '90', '90', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1006px', '940px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "edge_detail": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '26px', '979px', '882px', 'auto', 'auto'],
                            id: 'Rectangle_E',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'edge_detal',
                            rect: ['25px', '49px', '930px', '834px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/edge_detal.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.66667', '0.66667']],
                            id: 'close_E',
                            symbolName: 'close',
                            cursor: 'pointer',
                            rect: ['931px', '-15px', '90', '90', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1006px', '908px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "compute_Detail": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '26px', '979px', '942px', 'auto', 'auto'],
                            id: 'Rectangle_C',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'compute_Detail',
                            rect: ['25px', '52px', '930px', '890px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/compute_Detail.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.66667', '0.66667']],
                            id: 'close_C',
                            symbolName: 'close',
                            cursor: 'pointer',
                            rect: ['931px', '-15px', '90', '90', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1006px', '968px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "storage_detail": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '33px', '1355px', '943px', 'auto', 'auto'],
                            id: 'Rectangle_S',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'storage_detail',
                            rect: ['28px', '60px', '1300px', '888px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/storage_detail.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.66667', '0.66667']],
                            id: 'close_S',
                            symbolName: 'close',
                            cursor: 'pointer',
                            rect: ['1310px', '-15px', '90', '90', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1385px', '976px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "transportzone_details": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '22px', '1355px', '966px', 'auto', 'auto'],
                            id: 'Rectangle_CT',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            id: 'transportzone_detail',
                            type: 'image',
                            rect: ['28px', '49px', '1300px', '913px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/transportzone_detail.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.66667', '0.66667']],
                            id: 'close_CT',
                            symbolName: 'close',
                            cursor: 'pointer',
                            rect: ['1310px', '-15px', '90', '90', 'auto', 'auto']
                        },
                        {
                            id: 'data_one',
                            symbolName: 'data_one',
                            rect: ['1103', '457', '12', '12', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'data_two',
                            symbolName: 'data_two',
                            rect: ['1103', '457', '12', '12', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'data_three',
                            symbolName: 'data_three',
                            rect: ['1103', '457', '12', '12', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'hotspot3',
                            symbolName: 'hotspot3',
                            cursor: 'pointer',
                            rect: ['411px', '167px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'hotspot2',
                            symbolName: 'hotspot2',
                            cursor: 'pointer',
                            rect: ['730px', '167px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'hotspot1',
                            symbolName: 'hotspot1',
                            cursor: 'pointer',
                            rect: ['1032px', '167px', null, null, 'auto', 'auto']
                        },
                        {
                            id: 'white',
                            symbolName: 'white',
                            rect: ['1106', '460px', '12', '12', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'blue',
                            symbolName: 'blue',
                            rect: ['1106', '465', '12', '12', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'yellow',
                            symbolName: 'yellow',
                            rect: ['1106', '466', '12', '12', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1385px', '988px']
                        }
                    }
                },
                timeline: {
                    duration: 20500,
                    autoPlay: true,
                    data: [
                        [
                            "eid713",
                            "left",
                            0,
                            0,
                            "linear",
                            "${hotspot3}",
                            '411px',
                            '411px'
                        ],
                        [
                            "eid714",
                            "top",
                            0,
                            0,
                            "linear",
                            "${hotspot3}",
                            '167px',
                            '167px'
                        ],
                        [
                            "eid715",
                            "top",
                            0,
                            0,
                            "linear",
                            "${hotspot1}",
                            '167px',
                            '167px'
                        ],
                        [
                            "eid1038",
                            "left",
                            0,
                            0,
                            "linear",
                            "${hotspot1}",
                            '1135px',
                            '1032px'
                        ],
                        [
                            "eid720",
                            "top",
                            991,
                            0,
                            "linear",
                            "${white}",
                            '460px',
                            '460px'
                        ]
                    ]
                }
            },
            "data_one": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-79px', '-104px', '12px', '12px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(255,255,255,1.00)', 3, 3, 2],
                            display: 'none',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(255,255,255,1.00)', 3, 3, 2],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-79px', '-104px', '12px', '12px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(255,255,255,1.00)', 3, 3, 2],
                            display: 'none',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(255,255,255,1.00)', 3, 3, 2],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'RectangleCopy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-79px', '-104px', '12px', '12px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(255,255,255,1.00)', 3, 3, 2],
                            display: 'none',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(255,255,255,1.00)', 3, 3, 2],
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '12px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 6378,
                    autoPlay: true,
                    labels: {
                        "go": 51
                    },
                    data: [
                        [
                            "eid649",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid367",
                            "display",
                            51,
                            0,
                            "easeInQuad",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid366",
                            "display",
                            2051,
                            0,
                            "easeInQuad",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid385",
                            "top",
                            4378,
                            530,
                            "easeInQuad",
                            "${RectangleCopy3}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid386",
                            "top",
                            4908,
                            530,
                            "easeInQuad",
                            "${RectangleCopy3}",
                            '-80px',
                            '-104px'
                        ],
                        [
                            "eid387",
                            "top",
                            5437,
                            462,
                            "easeInQuad",
                            "${RectangleCopy3}",
                            '-104px',
                            '-84px'
                        ],
                        [
                            "eid388",
                            "top",
                            5899,
                            479,
                            "easeInQuad",
                            "${RectangleCopy3}",
                            '-84px',
                            '-4px'
                        ],
                        [
                            "eid383",
                            "left",
                            4908,
                            530,
                            "easeInQuad",
                            "${RectangleCopy3}",
                            '0px',
                            '-79px'
                        ],
                        [
                            "eid384",
                            "left",
                            5437,
                            462,
                            "easeInQuad",
                            "${RectangleCopy3}",
                            '-79px',
                            '-159px'
                        ],
                        [
                            "eid348",
                            "top",
                            51,
                            530,
                            "easeInQuad",
                            "${Rectangle}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid350",
                            "top",
                            581,
                            530,
                            "easeInQuad",
                            "${Rectangle}",
                            '-80px',
                            '-104px'
                        ],
                        [
                            "eid352",
                            "top",
                            1110,
                            462,
                            "easeInQuad",
                            "${Rectangle}",
                            '-104px',
                            '-84px'
                        ],
                        [
                            "eid353",
                            "top",
                            1572,
                            479,
                            "easeInQuad",
                            "${Rectangle}",
                            '-84px',
                            '-4px'
                        ],
                        [
                            "eid372",
                            "top",
                            2210,
                            530,
                            "easeInQuad",
                            "${RectangleCopy2}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid373",
                            "top",
                            2739,
                            530,
                            "easeInQuad",
                            "${RectangleCopy2}",
                            '-80px',
                            '-104px'
                        ],
                        [
                            "eid374",
                            "top",
                            3269,
                            462,
                            "easeInQuad",
                            "${RectangleCopy2}",
                            '-104px',
                            '-84px'
                        ],
                        [
                            "eid375",
                            "top",
                            3731,
                            479,
                            "easeInQuad",
                            "${RectangleCopy2}",
                            '-84px',
                            '-4px'
                        ],
                        [
                            "eid376",
                            "left",
                            2739,
                            530,
                            "easeInQuad",
                            "${RectangleCopy2}",
                            '0px',
                            '-79px'
                        ],
                        [
                            "eid377",
                            "left",
                            3269,
                            462,
                            "easeInQuad",
                            "${RectangleCopy2}",
                            '-79px',
                            '-159px'
                        ],
                        [
                            "eid349",
                            "left",
                            581,
                            530,
                            "easeInQuad",
                            "${Rectangle}",
                            '0px',
                            '-79px'
                        ],
                        [
                            "eid351",
                            "left",
                            1110,
                            462,
                            "easeInQuad",
                            "${Rectangle}",
                            '-79px',
                            '-159px'
                        ],
                        [
                            "eid652",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${RectangleCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid650",
                            "display",
                            2210,
                            0,
                            "easeInQuad",
                            "${RectangleCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid379",
                            "display",
                            4210,
                            0,
                            "easeInQuad",
                            "${RectangleCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid651",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${RectangleCopy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid381",
                            "display",
                            4378,
                            0,
                            "easeInQuad",
                            "${RectangleCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid382",
                            "display",
                            6378,
                            0,
                            "easeInQuad",
                            "${RectangleCopy3}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "data_two": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-448px', '-11px', '12px', '12px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(137,203,223,1.00)', 3, 3, 2],
                            display: 'none',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(137,203,223,1.00)', 3, 3, 2],
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3Copy5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-448px', '-11px', '12px', '12px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(137,203,223,1.00)', 3, 3, 2],
                            display: 'none',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(137,203,223,1.00)', 3, 3, 2],
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3Copy6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-448px', '-11px', '12px', '12px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(137,203,223,1.00)', 3, 3, 2],
                            display: 'none',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(137,203,223,1.00)', 3, 3, 2],
                            fill: ['rgba(137,203,223,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '12px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 20500,
                    autoPlay: true,
                    labels: {
                        "go": 500
                    },
                    data: [
                        [
                            "eid630",
                            "top",
                            7250,
                            750,
                            "linear",
                            "${Rectangle3Copy5}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid631",
                            "top",
                            8000,
                            750,
                            "linear",
                            "${Rectangle3Copy5}",
                            '-80px',
                            '-105px'
                        ],
                        [
                            "eid632",
                            "top",
                            8750,
                            500,
                            "linear",
                            "${Rectangle3Copy5}",
                            '-105px',
                            '-125px'
                        ],
                        [
                            "eid633",
                            "top",
                            11156,
                            469,
                            "linear",
                            "${Rectangle3Copy5}",
                            '-125px',
                            '-104px'
                        ],
                        [
                            "eid634",
                            "top",
                            11625,
                            938,
                            "linear",
                            "${Rectangle3Copy5}",
                            '-104px',
                            '-84px'
                        ],
                        [
                            "eid635",
                            "top",
                            12563,
                            938,
                            "linear",
                            "${Rectangle3Copy5}",
                            '-84px',
                            '-11px'
                        ],
                        [
                            "eid636",
                            "top",
                            14000,
                            750,
                            "linear",
                            "${Rectangle3Copy6}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid637",
                            "top",
                            14750,
                            750,
                            "linear",
                            "${Rectangle3Copy6}",
                            '-80px',
                            '-105px'
                        ],
                        [
                            "eid638",
                            "top",
                            15500,
                            500,
                            "linear",
                            "${Rectangle3Copy6}",
                            '-105px',
                            '-125px'
                        ],
                        [
                            "eid639",
                            "top",
                            17906,
                            469,
                            "linear",
                            "${Rectangle3Copy6}",
                            '-125px',
                            '-104px'
                        ],
                        [
                            "eid640",
                            "top",
                            18375,
                            938,
                            "linear",
                            "${Rectangle3Copy6}",
                            '-104px',
                            '-84px'
                        ],
                        [
                            "eid641",
                            "top",
                            19313,
                            938,
                            "linear",
                            "${Rectangle3Copy6}",
                            '-84px',
                            '-11px'
                        ],
                        [
                            "eid551",
                            "left",
                            1250,
                            750,
                            "linear",
                            "${Rectangle3}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid554",
                            "left",
                            2500,
                            1906,
                            "linear",
                            "${Rectangle3}",
                            '-80px',
                            '-370px'
                        ],
                        [
                            "eid556",
                            "left",
                            4875,
                            938,
                            "linear",
                            "${Rectangle3}",
                            '-370px',
                            '-448px'
                        ],
                        [
                            "eid420",
                            "display",
                            13500,
                            0,
                            "easeInQuad",
                            "${Rectangle2Copy3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid421",
                            "display",
                            20000,
                            0,
                            "easeInQuad",
                            "${Rectangle2Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid654",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${Rectangle3Copy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid645",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${Rectangle3Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid646",
                            "display",
                            20250,
                            0,
                            "linear",
                            "${Rectangle3Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid627",
                            "left",
                            8000,
                            750,
                            "linear",
                            "${Rectangle3Copy5}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid628",
                            "left",
                            9250,
                            1906,
                            "linear",
                            "${Rectangle3Copy5}",
                            '-80px',
                            '-370px'
                        ],
                        [
                            "eid629",
                            "left",
                            11625,
                            938,
                            "linear",
                            "${Rectangle3Copy5}",
                            '-370px',
                            '-448px'
                        ],
                        [
                            "eid389",
                            "top",
                            0,
                            861,
                            "easeInQuad",
                            "${Rectangle2}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid391",
                            "top",
                            861,
                            737,
                            "easeInQuad",
                            "${Rectangle2}",
                            '-80px',
                            '-102px'
                        ],
                        [
                            "eid392",
                            "top",
                            1598,
                            492,
                            "easeInQuad",
                            "${Rectangle2}",
                            '-102px',
                            '-125px'
                        ],
                        [
                            "eid394",
                            "top",
                            3750,
                            500,
                            "easeInQuad",
                            "${Rectangle2}",
                            '-125px',
                            '-104px'
                        ],
                        [
                            "eid396",
                            "top",
                            4250,
                            1111,
                            "easeInQuad",
                            "${Rectangle2}",
                            '-104px',
                            '-74px'
                        ],
                        [
                            "eid397",
                            "top",
                            5361,
                            1139,
                            "easeInQuad",
                            "${Rectangle2}",
                            '-74px',
                            '-4px'
                        ],
                        [
                            "eid406",
                            "left",
                            7611,
                            737,
                            "easeInQuad",
                            "${Rectangle2Copy2}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid407",
                            "left",
                            8840,
                            1660,
                            "easeInQuad",
                            "${Rectangle2Copy2}",
                            '-80px',
                            '-368px'
                        ],
                        [
                            "eid408",
                            "left",
                            11000,
                            1111,
                            "easeInQuad",
                            "${Rectangle2Copy2}",
                            '-368px',
                            '-448px'
                        ],
                        [
                            "eid648",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${Rectangle3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid569",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid568",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid400",
                            "top",
                            6750,
                            861,
                            "easeInQuad",
                            "${Rectangle2Copy2}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid401",
                            "top",
                            7611,
                            737,
                            "easeInQuad",
                            "${Rectangle2Copy2}",
                            '-80px',
                            '-102px'
                        ],
                        [
                            "eid402",
                            "top",
                            8348,
                            492,
                            "easeInQuad",
                            "${Rectangle2Copy2}",
                            '-102px',
                            '-125px'
                        ],
                        [
                            "eid403",
                            "top",
                            10500,
                            500,
                            "easeInQuad",
                            "${Rectangle2Copy2}",
                            '-125px',
                            '-104px'
                        ],
                        [
                            "eid404",
                            "top",
                            11000,
                            1111,
                            "easeInQuad",
                            "${Rectangle2Copy2}",
                            '-104px',
                            '-74px'
                        ],
                        [
                            "eid405",
                            "top",
                            12111,
                            1139,
                            "easeInQuad",
                            "${Rectangle2Copy2}",
                            '-74px',
                            '-4px'
                        ],
                        [
                            "eid653",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${Rectangle3Copy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid625",
                            "display",
                            7250,
                            0,
                            "linear",
                            "${Rectangle3Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid626",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${Rectangle3Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid550",
                            "top",
                            500,
                            750,
                            "linear",
                            "${Rectangle3}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid552",
                            "top",
                            1250,
                            750,
                            "linear",
                            "${Rectangle3}",
                            '-80px',
                            '-105px'
                        ],
                        [
                            "eid553",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '-105px',
                            '-125px'
                        ],
                        [
                            "eid555",
                            "top",
                            4406,
                            469,
                            "linear",
                            "${Rectangle3}",
                            '-125px',
                            '-104px'
                        ],
                        [
                            "eid557",
                            "top",
                            4875,
                            938,
                            "linear",
                            "${Rectangle3}",
                            '-104px',
                            '-84px'
                        ],
                        [
                            "eid558",
                            "top",
                            5813,
                            938,
                            "linear",
                            "${Rectangle3}",
                            '-84px',
                            '-11px'
                        ],
                        [
                            "eid642",
                            "left",
                            14750,
                            750,
                            "linear",
                            "${Rectangle3Copy6}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid643",
                            "left",
                            16000,
                            1906,
                            "linear",
                            "${Rectangle3Copy6}",
                            '-80px',
                            '-370px'
                        ],
                        [
                            "eid644",
                            "left",
                            18375,
                            938,
                            "linear",
                            "${Rectangle3Copy6}",
                            '-370px',
                            '-448px'
                        ],
                        [
                            "eid399",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${Rectangle2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid398",
                            "display",
                            6500,
                            0,
                            "easeInQuad",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid417",
                            "left",
                            14361,
                            737,
                            "easeInQuad",
                            "${Rectangle2Copy3}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid418",
                            "left",
                            15590,
                            1660,
                            "easeInQuad",
                            "${Rectangle2Copy3}",
                            '-80px',
                            '-368px'
                        ],
                        [
                            "eid419",
                            "left",
                            17750,
                            1111,
                            "easeInQuad",
                            "${Rectangle2Copy3}",
                            '-368px',
                            '-448px'
                        ],
                        [
                            "eid409",
                            "display",
                            6750,
                            0,
                            "easeInQuad",
                            "${Rectangle2Copy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid410",
                            "display",
                            13250,
                            0,
                            "easeInQuad",
                            "${Rectangle2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid390",
                            "left",
                            861,
                            737,
                            "easeInQuad",
                            "${Rectangle2}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid393",
                            "left",
                            2090,
                            1660,
                            "easeInQuad",
                            "${Rectangle2}",
                            '-80px',
                            '-368px'
                        ],
                        [
                            "eid395",
                            "left",
                            4250,
                            1111,
                            "easeInQuad",
                            "${Rectangle2}",
                            '-368px',
                            '-448px'
                        ],
                        [
                            "eid411",
                            "top",
                            13500,
                            861,
                            "easeInQuad",
                            "${Rectangle2Copy3}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid412",
                            "top",
                            14361,
                            737,
                            "easeInQuad",
                            "${Rectangle2Copy3}",
                            '-80px',
                            '-102px'
                        ],
                        [
                            "eid413",
                            "top",
                            15098,
                            492,
                            "easeInQuad",
                            "${Rectangle2Copy3}",
                            '-102px',
                            '-125px'
                        ],
                        [
                            "eid414",
                            "top",
                            17250,
                            500,
                            "easeInQuad",
                            "${Rectangle2Copy3}",
                            '-125px',
                            '-104px'
                        ],
                        [
                            "eid415",
                            "top",
                            17750,
                            1111,
                            "easeInQuad",
                            "${Rectangle2Copy3}",
                            '-104px',
                            '-74px'
                        ],
                        [
                            "eid416",
                            "top",
                            18861,
                            1139,
                            "easeInQuad",
                            "${Rectangle2Copy3}",
                            '-74px',
                            '-4px'
                        ]
                    ]
                }
            },
            "data_three": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-800px', '-296px', '12px', '12px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(253,184,19,1.00)', 3, 3, 2],
                            display: 'none',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(253,184,19,1.00)', 3, 3, 2],
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-800px', '-296px', '12px', '12px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(253,184,19,1.00)', 3, 3, 2],
                            display: 'none',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(253,184,19,1.00)', 3, 3, 2],
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3Copy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-800px', '-296px', '12px', '12px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(253,184,19,1.00)', 3, 3, 2],
                            display: 'none',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(253,184,19,1.00)', 3, 3, 2],
                            fill: ['rgba(253,184,19,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '12px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 19425,
                    autoPlay: true,
                    labels: {
                        "go": 250
                    },
                    data: [
                        [
                            "eid548",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${Rectangle3Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid432",
                            "display",
                            6750,
                            0,
                            "easeInQuad",
                            "${Rectangle3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid433",
                            "display",
                            12925,
                            0,
                            "easeInQuad",
                            "${Rectangle3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid437",
                            "top",
                            6750,
                            750,
                            "easeInQuad",
                            "${Rectangle3Copy}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid438",
                            "top",
                            7500,
                            660,
                            "easeInQuad",
                            "${Rectangle3Copy}",
                            '-80px',
                            '-106px'
                        ],
                        [
                            "eid439",
                            "top",
                            8160,
                            340,
                            "easeInQuad",
                            "${Rectangle3Copy}",
                            '-106px',
                            '-126px'
                        ],
                        [
                            "eid440",
                            "top",
                            10000,
                            587,
                            "easeInQuad",
                            "${Rectangle3Copy}",
                            '-126px',
                            '-53px'
                        ],
                        [
                            "eid441",
                            "top",
                            11410,
                            1515,
                            "easeInQuad",
                            "${Rectangle3Copy}",
                            '-53px',
                            '-296px'
                        ],
                        [
                            "eid423",
                            "left",
                            1000,
                            660,
                            "easeInQuad",
                            "${Rectangle3}",
                            '0px',
                            '-78px'
                        ],
                        [
                            "eid426",
                            "left",
                            2000,
                            1500,
                            "easeInQuad",
                            "${Rectangle3}",
                            '-78px',
                            '-603px'
                        ],
                        [
                            "eid428",
                            "left",
                            4087,
                            823,
                            "easeInQuad",
                            "${Rectangle3}",
                            '-603px',
                            '-800px'
                        ],
                        [
                            "eid647",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${Rectangle3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid431",
                            "display",
                            250,
                            0,
                            "easeInQuad",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid430",
                            "display",
                            6425,
                            0,
                            "easeInQuad",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid422",
                            "top",
                            250,
                            750,
                            "easeInQuad",
                            "${Rectangle3}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid424",
                            "top",
                            1000,
                            660,
                            "easeInQuad",
                            "${Rectangle3}",
                            '-80px',
                            '-106px'
                        ],
                        [
                            "eid425",
                            "top",
                            1660,
                            340,
                            "easeInQuad",
                            "${Rectangle3}",
                            '-106px',
                            '-126px'
                        ],
                        [
                            "eid427",
                            "top",
                            3500,
                            587,
                            "easeInQuad",
                            "${Rectangle3}",
                            '-126px',
                            '-53px'
                        ],
                        [
                            "eid429",
                            "top",
                            4910,
                            1515,
                            "easeInQuad",
                            "${Rectangle3}",
                            '-53px',
                            '-296px'
                        ],
                        [
                            "eid444",
                            "left",
                            14000,
                            660,
                            "easeInQuad",
                            "${Rectangle3Copy2}",
                            '0px',
                            '-78px'
                        ],
                        [
                            "eid445",
                            "left",
                            15000,
                            1500,
                            "easeInQuad",
                            "${Rectangle3Copy2}",
                            '-78px',
                            '-603px'
                        ],
                        [
                            "eid446",
                            "left",
                            17087,
                            823,
                            "easeInQuad",
                            "${Rectangle3Copy2}",
                            '-603px',
                            '-800px'
                        ],
                        [
                            "eid434",
                            "left",
                            7500,
                            660,
                            "easeInQuad",
                            "${Rectangle3Copy}",
                            '0px',
                            '-78px'
                        ],
                        [
                            "eid435",
                            "left",
                            8500,
                            1500,
                            "easeInQuad",
                            "${Rectangle3Copy}",
                            '-78px',
                            '-603px'
                        ],
                        [
                            "eid436",
                            "left",
                            10587,
                            823,
                            "easeInQuad",
                            "${Rectangle3Copy}",
                            '-603px',
                            '-800px'
                        ],
                        [
                            "eid549",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${Rectangle3Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid442",
                            "display",
                            13250,
                            0,
                            "easeInQuad",
                            "${Rectangle3Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid443",
                            "display",
                            19425,
                            0,
                            "easeInQuad",
                            "${Rectangle3Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid447",
                            "top",
                            13250,
                            750,
                            "easeInQuad",
                            "${Rectangle3Copy2}",
                            '0px',
                            '-80px'
                        ],
                        [
                            "eid448",
                            "top",
                            14000,
                            660,
                            "easeInQuad",
                            "${Rectangle3Copy2}",
                            '-80px',
                            '-106px'
                        ],
                        [
                            "eid449",
                            "top",
                            14660,
                            340,
                            "easeInQuad",
                            "${Rectangle3Copy2}",
                            '-106px',
                            '-126px'
                        ],
                        [
                            "eid450",
                            "top",
                            16500,
                            587,
                            "easeInQuad",
                            "${Rectangle3Copy2}",
                            '-126px',
                            '-53px'
                        ],
                        [
                            "eid451",
                            "top",
                            17910,
                            1515,
                            "easeInQuad",
                            "${Rectangle3Copy2}",
                            '-53px',
                            '-296px'
                        ]
                    ]
                }
            },
            "hotspot3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'yellow_box2',
                            type: 'image',
                            rect: ['20px', '3px', '140px', '33px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yellow_box.svg', '0px', '0px']
                        },
                        {
                            rect: ['-15px', '-15px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [10, 'rgba(253, 184, 19, 0.541176)', 'solid'],
                            id: 'EllipseCopy',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(253,184,19,0.00)', [270, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            rect: ['-15px', '-15px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [10, 'rgba(253, 184, 19, 0.541176)', 'solid'],
                            id: 'EllipseCopy2',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(253,184,19,0.00)', [270, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            rect: ['-15px', '-15px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [10, 'rgba(253, 184, 19, 0.541176)', 'solid'],
                            id: 'EllipseCopy3',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(253,184,19,0.00)', [270, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            rect: ['1px', '1px', '36px', '36px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(238,169,2,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '40px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 3010,
                    autoPlay: true,
                    labels: {
                        "start": 10
                    },
                    data: [
                        [
                            "eid502",
                            "height",
                            1510,
                            985,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid503",
                            "height",
                            2495,
                            515,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid490",
                            "height",
                            805,
                            985,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid491",
                            "height",
                            1790,
                            515,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid488",
                            "top",
                            805,
                            985,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '10px',
                            '-12px'
                        ],
                        [
                            "eid489",
                            "top",
                            1790,
                            515,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid507",
                            "width",
                            1510,
                            985,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid508",
                            "width",
                            2495,
                            515,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid473",
                            "left",
                            10,
                            985,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '11px',
                            '-12px'
                        ],
                        [
                            "eid485",
                            "left",
                            995,
                            515,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid492",
                            "opacity",
                            1790,
                            515,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid505",
                            "left",
                            1510,
                            985,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '11px',
                            '-12px'
                        ],
                        [
                            "eid506",
                            "left",
                            2495,
                            515,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid487",
                            "opacity",
                            995,
                            515,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid504",
                            "opacity",
                            2495,
                            515,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid470",
                            "width",
                            10,
                            985,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid484",
                            "width",
                            995,
                            515,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid482",
                            "top",
                            10,
                            985,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '10px',
                            '-12px'
                        ],
                        [
                            "eid486",
                            "top",
                            995,
                            515,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid468",
                            "height",
                            10,
                            985,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid483",
                            "height",
                            995,
                            515,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid495",
                            "width",
                            805,
                            985,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid499",
                            "width",
                            1790,
                            515,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid500",
                            "top",
                            1510,
                            985,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '10px',
                            '-12px'
                        ],
                        [
                            "eid501",
                            "top",
                            2495,
                            515,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid493",
                            "left",
                            805,
                            985,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '11px',
                            '-12px'
                        ],
                        [
                            "eid494",
                            "left",
                            1790,
                            515,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '-12px',
                            '-15px'
                        ]
                    ]
                }
            },
            "hotspot2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'blue_box2',
                            type: 'image',
                            rect: ['21px', '3px', '140px', '33px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/blue_box.svg', '0px', '0px']
                        },
                        {
                            rect: ['-15px', '-15px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [10, 'rgba(0,149,211,0.56)', 'solid'],
                            id: 'EllipseCopy',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(253,184,19,0.00)', [270, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            rect: ['-15px', '-15px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [10, 'rgba(0,149,211,0.56)', 'solid'],
                            id: 'EllipseCopy2',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(253,184,19,0.00)', [270, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            rect: ['-15px', '-15px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [10, 'rgba(0,149,211,0.56)', 'solid'],
                            id: 'EllipseCopy3',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(253,184,19,0.00)', [270, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            rect: ['2px', '1px', '36px', '36px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(0,132,188,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '40px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 3016,
                    autoPlay: true,
                    labels: {
                        "start": 16
                    },
                    data: [
                        [
                            "eid526",
                            "border-color",
                            2800,
                            0,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            'rgba(0,149,211,0.56)',
                            'rgba(0,149,211,0.56)'
                        ],
                        [
                            "eid487",
                            "opacity",
                            1001,
                            515,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid504",
                            "opacity",
                            2501,
                            515,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid482",
                            "top",
                            16,
                            985,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '10px',
                            '-12px'
                        ],
                        [
                            "eid486",
                            "top",
                            1001,
                            515,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid495",
                            "width",
                            811,
                            985,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid499",
                            "width",
                            1796,
                            515,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid500",
                            "top",
                            1516,
                            985,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '10px',
                            '-12px'
                        ],
                        [
                            "eid501",
                            "top",
                            2501,
                            515,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid493",
                            "left",
                            811,
                            985,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '11px',
                            '-12px'
                        ],
                        [
                            "eid494",
                            "left",
                            1796,
                            515,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid527",
                            "border-color",
                            2024,
                            0,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            'rgba(0,149,211,0.56)',
                            'rgba(0,149,211,0.56)'
                        ],
                        [
                            "eid468",
                            "height",
                            16,
                            985,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid483",
                            "height",
                            1001,
                            515,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid505",
                            "left",
                            1516,
                            985,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '11px',
                            '-12px'
                        ],
                        [
                            "eid506",
                            "left",
                            2501,
                            515,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid492",
                            "opacity",
                            1796,
                            515,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid470",
                            "width",
                            16,
                            985,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid484",
                            "width",
                            1001,
                            515,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid488",
                            "top",
                            811,
                            985,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '10px',
                            '-12px'
                        ],
                        [
                            "eid489",
                            "top",
                            1796,
                            515,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid473",
                            "left",
                            16,
                            985,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '11px',
                            '-12px'
                        ],
                        [
                            "eid485",
                            "left",
                            1001,
                            515,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid507",
                            "width",
                            1516,
                            985,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid508",
                            "width",
                            2501,
                            515,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid528",
                            "border-color",
                            1750,
                            0,
                            "easeInQuad",
                            "${EllipseCopy}",
                            'rgba(0,149,211,0.56)',
                            'rgba(0,149,211,0.56)'
                        ],
                        [
                            "eid490",
                            "height",
                            811,
                            985,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid491",
                            "height",
                            1796,
                            515,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid502",
                            "height",
                            1516,
                            985,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid503",
                            "height",
                            2501,
                            515,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '44px',
                            '50px'
                        ]
                    ]
                }
            },
            "hotspot1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-15px', '-15px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [10, 'rgba(255,255,255,0.56)', 'solid'],
                            id: 'EllipseCopy',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(253,184,19,0.00)', [270, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            id: 'white_box2',
                            type: 'image',
                            rect: ['20px', '3px', '140px', '33px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/white_box.svg', '0px', '0px']
                        },
                        {
                            rect: ['-15px', '-15px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [10, 'rgba(255,255,255,0.56)', 'solid'],
                            id: 'EllipseCopy2',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(253,184,19,0.00)', [270, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            rect: ['-15px', '-15px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [10, 'rgba(255,255,255,0.56)', 'solid'],
                            id: 'EllipseCopy3',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(253,184,19,0.00)', [270, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            rect: ['1px', '1px', '36px', '36px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(239,239,239,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '40px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 3015,
                    autoPlay: true,
                    labels: {
                        "start": 15
                    },
                    data: [
                        [
                            "eid547",
                            "border-color",
                            2799,
                            0,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            'rgba(255,255,255,0.56)',
                            'rgba(255,255,255,0.56)'
                        ],
                        [
                            "eid505",
                            "left",
                            1515,
                            985,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '11px',
                            '-12px'
                        ],
                        [
                            "eid506",
                            "left",
                            2500,
                            515,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid504",
                            "opacity",
                            2500,
                            515,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid482",
                            "top",
                            15,
                            985,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '10px',
                            '-12px'
                        ],
                        [
                            "eid486",
                            "top",
                            1000,
                            515,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid495",
                            "width",
                            810,
                            985,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid499",
                            "width",
                            1795,
                            515,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid500",
                            "top",
                            1515,
                            985,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '10px',
                            '-12px'
                        ],
                        [
                            "eid501",
                            "top",
                            2500,
                            515,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid493",
                            "left",
                            810,
                            985,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '11px',
                            '-12px'
                        ],
                        [
                            "eid494",
                            "left",
                            1795,
                            515,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid544",
                            "border-color",
                            2054,
                            0,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            'rgba(255,255,255,0.56)',
                            'rgba(255,255,255,0.56)'
                        ],
                        [
                            "eid468",
                            "height",
                            15,
                            985,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid483",
                            "height",
                            1000,
                            515,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid487",
                            "opacity",
                            1000,
                            515,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid492",
                            "opacity",
                            1795,
                            515,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid470",
                            "width",
                            15,
                            985,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid484",
                            "width",
                            1000,
                            515,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid546",
                            "border-color",
                            1750,
                            0,
                            "easeInQuad",
                            "${EllipseCopy}",
                            'rgba(255,255,255,0.56)',
                            'rgba(255,255,255,0.56)'
                        ],
                        [
                            "eid473",
                            "left",
                            15,
                            985,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '11px',
                            '-12px'
                        ],
                        [
                            "eid485",
                            "left",
                            1000,
                            515,
                            "easeInQuad",
                            "${EllipseCopy}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid507",
                            "width",
                            1515,
                            985,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid508",
                            "width",
                            2500,
                            515,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid488",
                            "top",
                            810,
                            985,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '10px',
                            '-12px'
                        ],
                        [
                            "eid489",
                            "top",
                            1795,
                            515,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '-12px',
                            '-15px'
                        ],
                        [
                            "eid490",
                            "height",
                            810,
                            985,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid491",
                            "height",
                            1795,
                            515,
                            "easeInQuad",
                            "${EllipseCopy2}",
                            '44px',
                            '50px'
                        ],
                        [
                            "eid502",
                            "height",
                            1515,
                            985,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0px',
                            '44px'
                        ],
                        [
                            "eid503",
                            "height",
                            2500,
                            515,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '44px',
                            '50px'
                        ]
                    ]
                }
            },
            "white": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-3px', '13px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '12px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 4652,
                    autoPlay: true,
                    labels: {
                        "go": 12
                    },
                    data: [
                        [
                            "eid717",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid718",
                            "display",
                            12,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid710",
                            "display",
                            2302,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid662",
                            "location",
                            182,
                            2290,
                            "linear",
                            "${RectangleCopy4}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.75, -78.18, 0.33, 1.73, 0.32, 1.69,84.19],[-74.3, -101.06, -0.19, 1.66, -0.38, 3.36,166.5],[-153.19, -77.94, -0.46, -0.18, -0.67, -0.26,248.71],[-153.23, 8.88, 0, 0, 0, 0,335.53]]
                        ],
                        [
                            "eid666",
                            "location",
                            878,
                            2290,
                            "linear",
                            "${RectangleCopy8}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.75, -78.18, 0.33, 1.73, 0.32, 1.69,84.19],[-74.3, -101.06, -0.19, 1.66, -0.38, 3.36,166.5],[-153.19, -77.94, -0.46, -0.18, -0.67, -0.26,248.71],[-153.23, 8.88, 0, 0, 0, 0,335.53]]
                        ],
                        [
                            "eid668",
                            "location",
                            1285,
                            2290,
                            "linear",
                            "${RectangleCopy10}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.75, -78.18, 0.33, 1.73, 0.32, 1.69,84.19],[-74.3, -101.06, -0.19, 1.66, -0.38, 3.36,166.5],[-153.19, -77.94, -0.46, -0.18, -0.67, -0.26,248.71],[-153.23, 8.88, 0, 0, 0, 0,335.53]]
                        ],
                        [
                            "eid672",
                            "location",
                            2032,
                            2290,
                            "linear",
                            "${RectangleCopy14}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.75, -78.18, 0.33, 1.73, 0.32, 1.69,84.19],[-74.3, -101.06, -0.19, 1.66, -0.38, 3.36,166.5],[-153.19, -77.94, -0.46, -0.18, -0.67, -0.26,248.71],[-153.23, 8.88, 0, 0, 0, 0,335.53]]
                        ],
                        [
                            "eid667",
                            "location",
                            1065,
                            2290,
                            "linear",
                            "${RectangleCopy9}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.75, -78.18, 0.33, 1.73, 0.32, 1.69,84.19],[-74.3, -101.06, -0.19, 1.66, -0.38, 3.36,166.5],[-153.19, -77.94, -0.46, -0.18, -0.67, -0.26,248.71],[-153.23, 8.88, 0, 0, 0, 0,335.53]]
                        ],
                        [
                            "eid683",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid692",
                            "display",
                            702,
                            0,
                            "linear",
                            "${RectangleCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid693",
                            "display",
                            2992,
                            0,
                            "linear",
                            "${RectangleCopy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid665",
                            "location",
                            702,
                            2290,
                            "linear",
                            "${RectangleCopy7}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.75, -78.18, 0.33, 1.73, 0.32, 1.69,84.19],[-74.3, -101.06, -0.19, 1.66, -0.38, 3.36,166.5],[-153.19, -77.94, -0.46, -0.18, -0.67, -0.26,248.71],[-153.23, 8.88, 0, 0, 0, 0,335.53]]
                        ],
                        [
                            "eid681",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid696",
                            "display",
                            1065,
                            0,
                            "linear",
                            "${RectangleCopy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid697",
                            "display",
                            3355,
                            0,
                            "linear",
                            "${RectangleCopy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid670",
                            "location",
                            1662,
                            2290,
                            "linear",
                            "${RectangleCopy12}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.75, -78.18, 0.33, 1.73, 0.32, 1.69,84.19],[-74.3, -101.06, -0.19, 1.66, -0.38, 3.36,166.5],[-153.19, -77.94, -0.46, -0.18, -0.67, -0.26,248.71],[-153.23, 8.88, 0, 0, 0, 0,335.53]]
                        ],
                        [
                            "eid682",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid694",
                            "display",
                            878,
                            0,
                            "linear",
                            "${RectangleCopy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid695",
                            "display",
                            3168,
                            0,
                            "linear",
                            "${RectangleCopy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid675",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid708",
                            "display",
                            2222,
                            0,
                            "linear",
                            "${RectangleCopy15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid709",
                            "display",
                            4512,
                            0,
                            "linear",
                            "${RectangleCopy15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid661",
                            "location",
                            12,
                            2290,
                            "linear",
                            "${Rectangle}",
                            [[6, 6, 0, 0, 0, 0,0],[4.75, -78.18, 0.33, 1.73, 0.32, 1.69,84.19],[-74.3, -101.07, -0.19, 1.66, -0.38, 3.36,166.5],[-153.2, -77.94, -0.46, -0.18, -0.67, -0.26,248.73],[-153.23, 8.88, 0, 0, 0, 0,335.55]]
                        ],
                        [
                            "eid673",
                            "location",
                            2222,
                            2290,
                            "linear",
                            "${RectangleCopy15}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.75, -78.18, 0.33, 1.73, 0.32, 1.69,84.19],[-74.3, -101.06, -0.19, 1.66, -0.38, 3.36,166.5],[-153.19, -77.94, -0.46, -0.18, -0.67, -0.26,248.71],[-153.23, 8.88, 0, 0, 0, 0,335.53]]
                        ],
                        [
                            "eid669",
                            "location",
                            1455,
                            2290,
                            "linear",
                            "${RectangleCopy11}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.75, -78.18, 0.33, 1.73, 0.32, 1.69,84.19],[-74.3, -101.06, -0.19, 1.66, -0.38, 3.36,166.5],[-153.19, -77.94, -0.46, -0.18, -0.67, -0.26,248.71],[-153.23, 8.88, 0, 0, 0, 0,335.53]]
                        ],
                        [
                            "eid676",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid706",
                            "display",
                            2032,
                            0,
                            "linear",
                            "${RectangleCopy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid707",
                            "display",
                            4322,
                            0,
                            "linear",
                            "${RectangleCopy14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid685",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid688",
                            "display",
                            319,
                            0,
                            "linear",
                            "${RectangleCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid689",
                            "display",
                            2609,
                            0,
                            "linear",
                            "${RectangleCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid664",
                            "location",
                            502,
                            2290,
                            "linear",
                            "${RectangleCopy6}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.75, -78.18, 0.33, 1.73, 0.32, 1.69,84.19],[-74.3, -101.06, -0.19, 1.66, -0.38, 3.36,166.5],[-153.19, -77.94, -0.46, -0.18, -0.67, -0.26,248.71],[-153.23, 8.88, 0, 0, 0, 0,335.53]]
                        ],
                        [
                            "eid679",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid700",
                            "display",
                            1455,
                            0,
                            "linear",
                            "${RectangleCopy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid701",
                            "display",
                            3745,
                            0,
                            "linear",
                            "${RectangleCopy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid671",
                            "location",
                            1862,
                            2290,
                            "linear",
                            "${RectangleCopy13}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.75, -78.18, 0.33, 1.73, 0.32, 1.69,84.19],[-74.3, -101.06, -0.19, 1.66, -0.38, 3.36,166.5],[-153.19, -77.94, -0.46, -0.18, -0.67, -0.26,248.71],[-153.23, 8.88, 0, 0, 0, 0,335.53]]
                        ],
                        [
                            "eid663",
                            "location",
                            319,
                            2290,
                            "linear",
                            "${RectangleCopy5}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.75, -78.18, 0.33, 1.73, 0.32, 1.69,84.19],[-74.3, -101.06, -0.19, 1.66, -0.38, 3.36,166.5],[-153.19, -77.94, -0.46, -0.18, -0.67, -0.26,248.71],[-153.23, 8.88, 0, 0, 0, 0,335.53]]
                        ],
                        [
                            "eid678",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid702",
                            "display",
                            1662,
                            0,
                            "linear",
                            "${RectangleCopy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid703",
                            "display",
                            3952,
                            0,
                            "linear",
                            "${RectangleCopy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid684",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid690",
                            "display",
                            502,
                            0,
                            "linear",
                            "${RectangleCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid691",
                            "display",
                            2792,
                            0,
                            "linear",
                            "${RectangleCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid680",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid698",
                            "display",
                            1285,
                            0,
                            "linear",
                            "${RectangleCopy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid699",
                            "display",
                            3575,
                            0,
                            "linear",
                            "${RectangleCopy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid674",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid686",
                            "display",
                            192,
                            0,
                            "linear",
                            "${RectangleCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid687",
                            "display",
                            2469,
                            0,
                            "linear",
                            "${RectangleCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid677",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid704",
                            "display",
                            1862,
                            0,
                            "linear",
                            "${RectangleCopy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid705",
                            "display",
                            4152,
                            0,
                            "linear",
                            "${RectangleCopy13}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "blue": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '0px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy18',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy19',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy20',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy21',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy22',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy23',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy24',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy25',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy26',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy27',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy28',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy29',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy30',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy31',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy32',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy33',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy34',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy35',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy36',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy37',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy38',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy39',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy40',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(137,203,223,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '12px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 13000,
                    autoPlay: true,
                    labels: {
                        "go": 91
                    },
                    data: [
                        [
                            "eid740",
                            "location",
                            750,
                            5500,
                            "linear",
                            "${RectangleCopy18}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid797",
                            "location",
                            4947,
                            5500,
                            "linear",
                            "${RectangleCopy33}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid786",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy30}",
                            'none',
                            'none'
                        ],
                        [
                            "eid787",
                            "display",
                            4108,
                            0,
                            "linear",
                            "${RectangleCopy30}",
                            'none',
                            'block'
                        ],
                        [
                            "eid788",
                            "display",
                            9607,
                            0,
                            "linear",
                            "${RectangleCopy30}",
                            'block',
                            'none'
                        ],
                        [
                            "eid784",
                            "location",
                            3828,
                            5500,
                            "linear",
                            "${RectangleCopy29}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid817",
                            "location",
                            6346,
                            5500,
                            "linear",
                            "${RectangleCopy38}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid825",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy40}",
                            'none',
                            'none'
                        ],
                        [
                            "eid826",
                            "display",
                            6890,
                            0,
                            "linear",
                            "${RectangleCopy40}",
                            'none',
                            'block'
                        ],
                        [
                            "eid827",
                            "display",
                            12643,
                            0,
                            "linear",
                            "${RectangleCopy40}",
                            'block',
                            'none'
                        ],
                        [
                            "eid774",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy27}",
                            'none',
                            'none'
                        ],
                        [
                            "eid775",
                            "display",
                            3269,
                            0,
                            "linear",
                            "${RectangleCopy27}",
                            'none',
                            'block'
                        ],
                        [
                            "eid776",
                            "display",
                            8768,
                            0,
                            "linear",
                            "${RectangleCopy27}",
                            'block',
                            'none'
                        ],
                        [
                            "eid808",
                            "location",
                            5506,
                            5500,
                            "linear",
                            "${RectangleCopy35}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid777",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy28}",
                            'none',
                            'none'
                        ],
                        [
                            "eid778",
                            "display",
                            3548,
                            0,
                            "linear",
                            "${RectangleCopy28}",
                            'none',
                            'block'
                        ],
                        [
                            "eid779",
                            "display",
                            9048,
                            0,
                            "linear",
                            "${RectangleCopy28}",
                            'block',
                            'none'
                        ],
                        [
                            "eid772",
                            "location",
                            2988,
                            5500,
                            "linear",
                            "${RectangleCopy26}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid758",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy23}",
                            'none',
                            'none'
                        ],
                        [
                            "eid759",
                            "display",
                            2149,
                            0,
                            "linear",
                            "${RectangleCopy23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid760",
                            "display",
                            7649,
                            0,
                            "linear",
                            "${RectangleCopy23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid793",
                            "location",
                            4667,
                            5500,
                            "linear",
                            "${RectangleCopy32}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid749",
                            "location",
                            1589,
                            5500,
                            "linear",
                            "${RectangleCopy21}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid733",
                            "location",
                            517,
                            5500,
                            "linear",
                            "${RectangleCopy17}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid741",
                            "location",
                            1030,
                            5500,
                            "linear",
                            "${RectangleCopy19}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid737",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy18}",
                            'none',
                            'none'
                        ],
                        [
                            "eid738",
                            "display",
                            750,
                            0,
                            "linear",
                            "${RectangleCopy18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid739",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${RectangleCopy18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid756",
                            "location",
                            1869,
                            5500,
                            "linear",
                            "${RectangleCopy22}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid813",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy37}",
                            'none',
                            'none'
                        ],
                        [
                            "eid814",
                            "display",
                            6066,
                            0,
                            "linear",
                            "${RectangleCopy37}",
                            'none',
                            'block'
                        ],
                        [
                            "eid815",
                            "display",
                            11566,
                            0,
                            "linear",
                            "${RectangleCopy37}",
                            'block',
                            'none'
                        ],
                        [
                            "eid765",
                            "location",
                            2709,
                            5500,
                            "linear",
                            "${RectangleCopy25}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid821",
                            "location",
                            6626,
                            5500,
                            "linear",
                            "${RectangleCopy39}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid757",
                            "location",
                            2149,
                            5500,
                            "linear",
                            "${RectangleCopy23}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid745",
                            "location",
                            1310,
                            5500,
                            "linear",
                            "${RectangleCopy20}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid773",
                            "location",
                            3268,
                            5500,
                            "linear",
                            "${RectangleCopy27}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid801",
                            "location",
                            5227,
                            5500,
                            "linear",
                            "${RectangleCopy34}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid822",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy39}",
                            'none',
                            'none'
                        ],
                        [
                            "eid823",
                            "display",
                            6626,
                            0,
                            "linear",
                            "${RectangleCopy39}",
                            'none',
                            'block'
                        ],
                        [
                            "eid824",
                            "display",
                            12126,
                            0,
                            "linear",
                            "${RectangleCopy39}",
                            'block',
                            'none'
                        ],
                        [
                            "eid794",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy32}",
                            'none',
                            'none'
                        ],
                        [
                            "eid795",
                            "display",
                            4668,
                            0,
                            "linear",
                            "${RectangleCopy32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid796",
                            "display",
                            10167,
                            0,
                            "linear",
                            "${RectangleCopy32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid762",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy24}",
                            'none',
                            'none'
                        ],
                        [
                            "eid763",
                            "display",
                            2429,
                            0,
                            "linear",
                            "${RectangleCopy24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid764",
                            "display",
                            7929,
                            0,
                            "linear",
                            "${RectangleCopy24}",
                            'block',
                            'none'
                        ],
                        [
                            "eid816",
                            "location",
                            6066,
                            5500,
                            "linear",
                            "${RectangleCopy37}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid725",
                            "location",
                            91,
                            5500,
                            "linear",
                            "${RectangleCopy2}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.43, -0.53, 0.11, -2.71, 0.58,583.19],[-442.44, 6.86, 0, 0, 0, 0,672.49]]
                        ],
                        [
                            "eid785",
                            "location",
                            4107,
                            5500,
                            "linear",
                            "${RectangleCopy30}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid810",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'none',
                            'none'
                        ],
                        [
                            "eid811",
                            "display",
                            5787,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'none',
                            'block'
                        ],
                        [
                            "eid812",
                            "display",
                            11286,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'block',
                            'none'
                        ],
                        [
                            "eid761",
                            "location",
                            2429,
                            5500,
                            "linear",
                            "${RectangleCopy24}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid734",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid735",
                            "display",
                            518,
                            0,
                            "linear",
                            "${RectangleCopy17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid736",
                            "display",
                            6017,
                            0,
                            "linear",
                            "${RectangleCopy17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid750",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy21}",
                            'none',
                            'none'
                        ],
                        [
                            "eid751",
                            "display",
                            1590,
                            0,
                            "linear",
                            "${RectangleCopy21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid752",
                            "display",
                            7089,
                            0,
                            "linear",
                            "${RectangleCopy21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid805",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy35}",
                            'none',
                            'none'
                        ],
                        [
                            "eid806",
                            "display",
                            5507,
                            0,
                            "linear",
                            "${RectangleCopy35}",
                            'none',
                            'block'
                        ],
                        [
                            "eid807",
                            "display",
                            11006,
                            0,
                            "linear",
                            "${RectangleCopy35}",
                            'block',
                            'none'
                        ],
                        [
                            "eid802",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy34}",
                            'none',
                            'none'
                        ],
                        [
                            "eid803",
                            "display",
                            5227,
                            0,
                            "linear",
                            "${RectangleCopy34}",
                            'none',
                            'block'
                        ],
                        [
                            "eid804",
                            "display",
                            10727,
                            0,
                            "linear",
                            "${RectangleCopy34}",
                            'block',
                            'none'
                        ],
                        [
                            "eid809",
                            "location",
                            5786,
                            5500,
                            "linear",
                            "${RectangleCopy36}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid798",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy33}",
                            'none',
                            'none'
                        ],
                        [
                            "eid799",
                            "display",
                            4947,
                            0,
                            "linear",
                            "${RectangleCopy33}",
                            'none',
                            'block'
                        ],
                        [
                            "eid800",
                            "display",
                            10447,
                            0,
                            "linear",
                            "${RectangleCopy33}",
                            'block',
                            'none'
                        ],
                        [
                            "eid828",
                            "location",
                            6889,
                            5500,
                            "linear",
                            "${RectangleCopy40}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid789",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy31}",
                            'none',
                            'none'
                        ],
                        [
                            "eid790",
                            "display",
                            4388,
                            0,
                            "linear",
                            "${RectangleCopy31}",
                            'none',
                            'block'
                        ],
                        [
                            "eid791",
                            "display",
                            9887,
                            0,
                            "linear",
                            "${RectangleCopy31}",
                            'block',
                            'none'
                        ],
                        [
                            "eid729",
                            "location",
                            280,
                            5500,
                            "linear",
                            "${RectangleCopy16}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid792",
                            "location",
                            4387,
                            5500,
                            "linear",
                            "${RectangleCopy31}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid781",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy29}",
                            'none',
                            'none'
                        ],
                        [
                            "eid782",
                            "display",
                            3828,
                            0,
                            "linear",
                            "${RectangleCopy29}",
                            'none',
                            'block'
                        ],
                        [
                            "eid783",
                            "display",
                            9328,
                            0,
                            "linear",
                            "${RectangleCopy29}",
                            'block',
                            'none'
                        ],
                        [
                            "eid769",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy26}",
                            'none',
                            'none'
                        ],
                        [
                            "eid770",
                            "display",
                            2989,
                            0,
                            "linear",
                            "${RectangleCopy26}",
                            'none',
                            'block'
                        ],
                        [
                            "eid771",
                            "display",
                            8488,
                            0,
                            "linear",
                            "${RectangleCopy26}",
                            'block',
                            'none'
                        ],
                        [
                            "eid766",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy25}",
                            'none',
                            'none'
                        ],
                        [
                            "eid767",
                            "display",
                            2709,
                            0,
                            "linear",
                            "${RectangleCopy25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid768",
                            "display",
                            8209,
                            0,
                            "linear",
                            "${RectangleCopy25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid780",
                            "location",
                            3548,
                            5500,
                            "linear",
                            "${RectangleCopy28}",
                            [[6.01, 6.01, 0, 0, 0, 0,0],[6.17, -81.19, -1.71, -3.38, -2.71, -5.36,87.21],[-73.81, -104.34, 1.4, 1.16, 0.41, 0.34,170.49],[-73.32, -125.43, -0.14, 1.86, -0.08, 1.11,191.59],[-362.5, -125.61, 0.38, 0.21, 1.43, 0.79,480.77],[-362.85, -105.29, -0.05, 0.38, -0.11, 0.74,501.1],[-441.7, -82.42, -0.53, 0.11, -2.71, 0.58,583.2],[-442.44, 6.86, 0, 0, 0, 0,672.48]]
                        ],
                        [
                            "eid818",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy38}",
                            'none',
                            'none'
                        ],
                        [
                            "eid819",
                            "display",
                            6346,
                            0,
                            "linear",
                            "${RectangleCopy38}",
                            'none',
                            'block'
                        ],
                        [
                            "eid820",
                            "display",
                            11846,
                            0,
                            "linear",
                            "${RectangleCopy38}",
                            'block',
                            'none'
                        ],
                        [
                            "eid746",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy20}",
                            'none',
                            'none'
                        ],
                        [
                            "eid747",
                            "display",
                            1310,
                            0,
                            "linear",
                            "${RectangleCopy20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid748",
                            "display",
                            6810,
                            0,
                            "linear",
                            "${RectangleCopy20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid730",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid731",
                            "display",
                            280,
                            0,
                            "linear",
                            "${RectangleCopy16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid732",
                            "display",
                            5780,
                            0,
                            "linear",
                            "${RectangleCopy16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid727",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid726",
                            "display",
                            91,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid728",
                            "display",
                            5591,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid742",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy19}",
                            'none',
                            'none'
                        ],
                        [
                            "eid743",
                            "display",
                            1030,
                            0,
                            "linear",
                            "${RectangleCopy19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid744",
                            "display",
                            6530,
                            0,
                            "linear",
                            "${RectangleCopy19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid753",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid754",
                            "display",
                            1870,
                            0,
                            "linear",
                            "${RectangleCopy22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid755",
                            "display",
                            7369,
                            0,
                            "linear",
                            "${RectangleCopy22}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "yellow": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '0px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy41',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy42',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy43',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy44',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy45',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy46',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy47',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy48',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy49',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy50',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy51',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy52',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy53',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy54',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy55',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy56',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy57',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy58',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy59',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy60',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy61',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy62',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy63',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy64',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy65',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy66',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy67',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy68',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy69',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy70',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy71',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy72',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy73',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy74',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy75',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy76',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy77',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy78',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy79',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy80',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy81',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy82',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy83',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy84',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy85',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy86',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy87',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy88',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        },
                        {
                            rect: ['6px', '6px', '12px', '12px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleCopy89',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            autoOrient: 'true',
                            fill: ['rgba(253,184,19,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '12px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 11325,
                    autoPlay: true,
                    labels: {
                        "go": 11
                    },
                    data: [
                        [
                            "eid854",
                            "location",
                            511,
                            4989,
                            "linear",
                            "${RectangleCopy45}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid987",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy79}",
                            'none',
                            'none'
                        ],
                        [
                            "eid988",
                            "display",
                            4765,
                            0,
                            "linear",
                            "${RectangleCopy79}",
                            'none',
                            'block'
                        ],
                        [
                            "eid989",
                            "display",
                            9754,
                            0,
                            "linear",
                            "${RectangleCopy79}",
                            'block',
                            'none'
                        ],
                        [
                            "eid886",
                            "location",
                            1448,
                            4989,
                            "linear",
                            "${RectangleCopy53}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid851",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy45}",
                            'none',
                            'none'
                        ],
                        [
                            "eid852",
                            "display",
                            511,
                            0,
                            "linear",
                            "${RectangleCopy45}",
                            'none',
                            'block'
                        ],
                        [
                            "eid853",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${RectangleCopy45}",
                            'block',
                            'none'
                        ],
                        [
                            "eid891",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy55}",
                            'none',
                            'none'
                        ],
                        [
                            "eid892",
                            "display",
                            1695,
                            0,
                            "linear",
                            "${RectangleCopy55}",
                            'none',
                            'block'
                        ],
                        [
                            "eid893",
                            "display",
                            6684,
                            0,
                            "linear",
                            "${RectangleCopy55}",
                            'block',
                            'none'
                        ],
                        [
                            "eid866",
                            "location",
                            850,
                            4989,
                            "linear",
                            "${RectangleCopy48}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid946",
                            "location",
                            3535,
                            4989,
                            "linear",
                            "${RectangleCopy68}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid912",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy60}",
                            'none',
                            'none'
                        ],
                        [
                            "eid913",
                            "display",
                            2511,
                            0,
                            "linear",
                            "${RectangleCopy60}",
                            'none',
                            'block'
                        ],
                        [
                            "eid914",
                            "display",
                            7500,
                            0,
                            "linear",
                            "${RectangleCopy60}",
                            'block',
                            'none'
                        ],
                        [
                            "eid919",
                            "location",
                            2843,
                            4989,
                            "linear",
                            "${RectangleCopy62}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid843",
                            "location",
                            334,
                            4989,
                            "linear",
                            "${RectangleCopy43}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid1027",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy89}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1028",
                            "display",
                            6215,
                            0,
                            "linear",
                            "${RectangleCopy89}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1029",
                            "display",
                            11204,
                            0,
                            "linear",
                            "${RectangleCopy89}",
                            'block',
                            'none'
                        ],
                        [
                            "eid898",
                            "location",
                            1856,
                            4989,
                            "linear",
                            "${RectangleCopy56}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid964",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy73}",
                            'none',
                            'none'
                        ],
                        [
                            "eid965",
                            "display",
                            4103,
                            0,
                            "linear",
                            "${RectangleCopy73}",
                            'none',
                            'block'
                        ],
                        [
                            "eid966",
                            "display",
                            9092,
                            0,
                            "linear",
                            "${RectangleCopy73}",
                            'block',
                            'none'
                        ],
                        [
                            "eid903",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy58}",
                            'none',
                            'none'
                        ],
                        [
                            "eid904",
                            "display",
                            2186,
                            0,
                            "linear",
                            "${RectangleCopy58}",
                            'none',
                            'block'
                        ],
                        [
                            "eid905",
                            "display",
                            7175,
                            0,
                            "linear",
                            "${RectangleCopy58}",
                            'block',
                            'none'
                        ],
                        [
                            "eid910",
                            "location",
                            2352,
                            4989,
                            "linear",
                            "${RectangleCopy59}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid938",
                            "location",
                            3309,
                            4989,
                            "linear",
                            "${RectangleCopy66}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid935",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy66}",
                            'none',
                            'none'
                        ],
                        [
                            "eid936",
                            "display",
                            3309,
                            0,
                            "linear",
                            "${RectangleCopy66}",
                            'none',
                            'block'
                        ],
                        [
                            "eid937",
                            "display",
                            8298,
                            0,
                            "linear",
                            "${RectangleCopy66}",
                            'block',
                            'none'
                        ],
                        [
                            "eid926",
                            "location",
                            2970,
                            4989,
                            "linear",
                            "${RectangleCopy63}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid943",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy68}",
                            'none',
                            'none'
                        ],
                        [
                            "eid944",
                            "display",
                            3535,
                            0,
                            "linear",
                            "${RectangleCopy68}",
                            'none',
                            'block'
                        ],
                        [
                            "eid945",
                            "display",
                            8524,
                            0,
                            "linear",
                            "${RectangleCopy68}",
                            'block',
                            'none'
                        ],
                        [
                            "eid994",
                            "location",
                            4878,
                            4989,
                            "linear",
                            "${RectangleCopy80}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid999",
                            "location",
                            5102,
                            4989,
                            "linear",
                            "${RectangleCopy82}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid979",
                            "location",
                            4540,
                            4989,
                            "linear",
                            "${RectangleCopy77}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid927",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy64}",
                            'none',
                            'none'
                        ],
                        [
                            "eid928",
                            "display",
                            3083,
                            0,
                            "linear",
                            "${RectangleCopy64}",
                            'none',
                            'block'
                        ],
                        [
                            "eid929",
                            "display",
                            8072,
                            0,
                            "linear",
                            "${RectangleCopy64}",
                            'block',
                            'none'
                        ],
                        [
                            "eid863",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy48}",
                            'none',
                            'none'
                        ],
                        [
                            "eid864",
                            "display",
                            850,
                            0,
                            "linear",
                            "${RectangleCopy48}",
                            'none',
                            'block'
                        ],
                        [
                            "eid865",
                            "display",
                            5839,
                            0,
                            "linear",
                            "${RectangleCopy48}",
                            'block',
                            'none'
                        ],
                        [
                            "eid831",
                            "location",
                            11,
                            4989,
                            "linear",
                            "${RectangleCopy3}",
                            [[6.02, 6, 0, 0, 0, 0,0],[4.6, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.89, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.51, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid858",
                            "location",
                            624,
                            4989,
                            "linear",
                            "${RectangleCopy46}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid860",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy47}",
                            'none',
                            'none'
                        ],
                        [
                            "eid861",
                            "display",
                            737,
                            0,
                            "linear",
                            "${RectangleCopy47}",
                            'none',
                            'block'
                        ],
                        [
                            "eid862",
                            "display",
                            5726,
                            0,
                            "linear",
                            "${RectangleCopy47}",
                            'block',
                            'none'
                        ],
                        [
                            "eid934",
                            "location",
                            3196,
                            4989,
                            "linear",
                            "${RectangleCopy65}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid971",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy75}",
                            'none',
                            'none'
                        ],
                        [
                            "eid972",
                            "display",
                            4328,
                            0,
                            "linear",
                            "${RectangleCopy75}",
                            'none',
                            'block'
                        ],
                        [
                            "eid973",
                            "display",
                            9317,
                            0,
                            "linear",
                            "${RectangleCopy75}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1016",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy86}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1017",
                            "display",
                            5891,
                            0,
                            "linear",
                            "${RectangleCopy86}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1018",
                            "display",
                            10880,
                            0,
                            "linear",
                            "${RectangleCopy86}",
                            'block',
                            'none'
                        ],
                        [
                            "eid995",
                            "location",
                            4991,
                            4989,
                            "linear",
                            "${RectangleCopy81}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid899",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy57}",
                            'none',
                            'none'
                        ],
                        [
                            "eid900",
                            "display",
                            2011,
                            0,
                            "linear",
                            "${RectangleCopy57}",
                            'none',
                            'block'
                        ],
                        [
                            "eid901",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${RectangleCopy57}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1020",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy87}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1021",
                            "display",
                            6011,
                            0,
                            "linear",
                            "${RectangleCopy87}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1022",
                            "display",
                            10880,
                            0,
                            "linear",
                            "${RectangleCopy87}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1019",
                            "location",
                            6011,
                            4989,
                            "linear",
                            "${RectangleCopy87}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid868",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy49}",
                            'none',
                            'none'
                        ],
                        [
                            "eid869",
                            "display",
                            962,
                            0,
                            "linear",
                            "${RectangleCopy49}",
                            'none',
                            'block'
                        ],
                        [
                            "eid870",
                            "display",
                            5951,
                            0,
                            "linear",
                            "${RectangleCopy49}",
                            'block',
                            'none'
                        ],
                        [
                            "eid907",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy59}",
                            'none',
                            'none'
                        ],
                        [
                            "eid908",
                            "display",
                            2352,
                            0,
                            "linear",
                            "${RectangleCopy59}",
                            'none',
                            'block'
                        ],
                        [
                            "eid909",
                            "display",
                            7341,
                            0,
                            "linear",
                            "${RectangleCopy59}",
                            'block',
                            'none'
                        ],
                        [
                            "eid859",
                            "location",
                            737,
                            4989,
                            "linear",
                            "${RectangleCopy47}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid920",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy62}",
                            'none',
                            'none'
                        ],
                        [
                            "eid921",
                            "display",
                            2843,
                            0,
                            "linear",
                            "${RectangleCopy62}",
                            'none',
                            'block'
                        ],
                        [
                            "eid922",
                            "display",
                            7832,
                            0,
                            "linear",
                            "${RectangleCopy62}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1015",
                            "location",
                            5891,
                            4989,
                            "linear",
                            "${RectangleCopy86}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid940",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy67}",
                            'none',
                            'none'
                        ],
                        [
                            "eid941",
                            "display",
                            3422,
                            0,
                            "linear",
                            "${RectangleCopy67}",
                            'none',
                            'block'
                        ],
                        [
                            "eid942",
                            "display",
                            8411,
                            0,
                            "linear",
                            "${RectangleCopy67}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1000",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy82}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1001",
                            "display",
                            5102,
                            0,
                            "linear",
                            "${RectangleCopy82}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1002",
                            "display",
                            10091,
                            0,
                            "linear",
                            "${RectangleCopy82}",
                            'block',
                            'none'
                        ],
                        [
                            "eid888",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy54}",
                            'none',
                            'none'
                        ],
                        [
                            "eid889",
                            "display",
                            1561,
                            0,
                            "linear",
                            "${RectangleCopy54}",
                            'none',
                            'block'
                        ],
                        [
                            "eid890",
                            "display",
                            6550,
                            0,
                            "linear",
                            "${RectangleCopy54}",
                            'block',
                            'none'
                        ],
                        [
                            "eid978",
                            "location",
                            4431,
                            4989,
                            "linear",
                            "${RectangleCopy76}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid880",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy52}",
                            'none',
                            'none'
                        ],
                        [
                            "eid881",
                            "display",
                            1335,
                            0,
                            "linear",
                            "${RectangleCopy52}",
                            'none',
                            'block'
                        ],
                        [
                            "eid882",
                            "display",
                            6324,
                            0,
                            "linear",
                            "${RectangleCopy52}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1007",
                            "location",
                            5500,
                            4989,
                            "linear",
                            "${RectangleCopy84}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid848",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy44}",
                            'none',
                            'none'
                        ],
                        [
                            "eid849",
                            "display",
                            420,
                            0,
                            "linear",
                            "${RectangleCopy44}",
                            'none',
                            'block'
                        ],
                        [
                            "eid850",
                            "display",
                            5409,
                            0,
                            "linear",
                            "${RectangleCopy44}",
                            'block',
                            'none'
                        ],
                        [
                            "eid871",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy50}",
                            'none',
                            'none'
                        ],
                        [
                            "eid872",
                            "display",
                            1075,
                            0,
                            "linear",
                            "${RectangleCopy50}",
                            'none',
                            'block'
                        ],
                        [
                            "eid873",
                            "display",
                            6064,
                            0,
                            "linear",
                            "${RectangleCopy50}",
                            'block',
                            'none'
                        ],
                        [
                            "eid948",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy69}",
                            'none',
                            'none'
                        ],
                        [
                            "eid949",
                            "display",
                            3647,
                            0,
                            "linear",
                            "${RectangleCopy69}",
                            'none',
                            'block'
                        ],
                        [
                            "eid950",
                            "display",
                            8636,
                            0,
                            "linear",
                            "${RectangleCopy69}",
                            'block',
                            'none'
                        ],
                        [
                            "eid923",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy63}",
                            'none',
                            'none'
                        ],
                        [
                            "eid924",
                            "display",
                            2970,
                            0,
                            "linear",
                            "${RectangleCopy63}",
                            'none',
                            'block'
                        ],
                        [
                            "eid925",
                            "display",
                            7959,
                            0,
                            "linear",
                            "${RectangleCopy63}",
                            'block',
                            'none'
                        ],
                        [
                            "eid918",
                            "location",
                            2686,
                            4989,
                            "linear",
                            "${RectangleCopy61}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid1024",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy88}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1025",
                            "display",
                            6108,
                            0,
                            "linear",
                            "${RectangleCopy88}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1026",
                            "display",
                            11097,
                            0,
                            "linear",
                            "${RectangleCopy88}",
                            'block',
                            'none'
                        ],
                        [
                            "eid895",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy56}",
                            'none',
                            'none'
                        ],
                        [
                            "eid896",
                            "display",
                            1856,
                            0,
                            "linear",
                            "${RectangleCopy56}",
                            'none',
                            'block'
                        ],
                        [
                            "eid897",
                            "display",
                            6845,
                            0,
                            "linear",
                            "${RectangleCopy56}",
                            'block',
                            'none'
                        ],
                        [
                            "eid974",
                            "location",
                            4328,
                            4989,
                            "linear",
                            "${RectangleCopy75}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid991",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy80}",
                            'none',
                            'none'
                        ],
                        [
                            "eid992",
                            "display",
                            4878,
                            0,
                            "linear",
                            "${RectangleCopy80}",
                            'none',
                            'block'
                        ],
                        [
                            "eid993",
                            "display",
                            9867,
                            0,
                            "linear",
                            "${RectangleCopy80}",
                            'block',
                            'none'
                        ],
                        [
                            "eid879",
                            "location",
                            1335,
                            4989,
                            "linear",
                            "${RectangleCopy52}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid931",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy65}",
                            'none',
                            'none'
                        ],
                        [
                            "eid932",
                            "display",
                            3196,
                            0,
                            "linear",
                            "${RectangleCopy65}",
                            'none',
                            'block'
                        ],
                        [
                            "eid933",
                            "display",
                            8185,
                            0,
                            "linear",
                            "${RectangleCopy65}",
                            'block',
                            'none'
                        ],
                        [
                            "eid894",
                            "location",
                            1695,
                            4989,
                            "linear",
                            "${RectangleCopy55}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid887",
                            "location",
                            1561,
                            4989,
                            "linear",
                            "${RectangleCopy54}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid915",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy61}",
                            'none',
                            'none'
                        ],
                        [
                            "eid916",
                            "display",
                            2686,
                            0,
                            "linear",
                            "${RectangleCopy61}",
                            'none',
                            'block'
                        ],
                        [
                            "eid917",
                            "display",
                            7675,
                            0,
                            "linear",
                            "${RectangleCopy61}",
                            'block',
                            'none'
                        ],
                        [
                            "eid835",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy41}",
                            'none',
                            'none'
                        ],
                        [
                            "eid836",
                            "display",
                            113,
                            0,
                            "linear",
                            "${RectangleCopy41}",
                            'none',
                            'block'
                        ],
                        [
                            "eid837",
                            "display",
                            5102,
                            0,
                            "linear",
                            "${RectangleCopy41}",
                            'block',
                            'none'
                        ],
                        [
                            "eid958",
                            "location",
                            3874,
                            4989,
                            "linear",
                            "${RectangleCopy71}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid962",
                            "location",
                            3987,
                            4989,
                            "linear",
                            "${RectangleCopy72}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid840",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy42}",
                            'none',
                            'none'
                        ],
                        [
                            "eid841",
                            "display",
                            229,
                            0,
                            "linear",
                            "${RectangleCopy42}",
                            'none',
                            'block'
                        ],
                        [
                            "eid842",
                            "display",
                            5218,
                            0,
                            "linear",
                            "${RectangleCopy42}",
                            'block',
                            'none'
                        ],
                        [
                            "eid983",
                            "location",
                            4652,
                            4989,
                            "linear",
                            "${RectangleCopy78}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid955",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy71}",
                            'none',
                            'none'
                        ],
                        [
                            "eid956",
                            "display",
                            3874,
                            0,
                            "linear",
                            "${RectangleCopy71}",
                            'none',
                            'block'
                        ],
                        [
                            "eid957",
                            "display",
                            8863,
                            0,
                            "linear",
                            "${RectangleCopy71}",
                            'block',
                            'none'
                        ],
                        [
                            "eid847",
                            "location",
                            420,
                            4989,
                            "linear",
                            "${RectangleCopy44}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid1006",
                            "location",
                            5288,
                            4989,
                            "linear",
                            "${RectangleCopy83}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid1030",
                            "location",
                            6215,
                            4989,
                            "linear",
                            "${RectangleCopy89}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid967",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy74}",
                            'none',
                            'none'
                        ],
                        [
                            "eid968",
                            "display",
                            4215,
                            0,
                            "linear",
                            "${RectangleCopy74}",
                            'none',
                            'block'
                        ],
                        [
                            "eid969",
                            "display",
                            9204,
                            0,
                            "linear",
                            "${RectangleCopy74}",
                            'block',
                            'none'
                        ],
                        [
                            "eid833",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid832",
                            "display",
                            11,
                            0,
                            "linear",
                            "${RectangleCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid834",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${RectangleCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid996",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy81}",
                            'none',
                            'none'
                        ],
                        [
                            "eid997",
                            "display",
                            4991,
                            0,
                            "linear",
                            "${RectangleCopy81}",
                            'none',
                            'block'
                        ],
                        [
                            "eid998",
                            "display",
                            9980,
                            0,
                            "linear",
                            "${RectangleCopy81}",
                            'block',
                            'none'
                        ],
                        [
                            "eid980",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy77}",
                            'none',
                            'none'
                        ],
                        [
                            "eid981",
                            "display",
                            4540,
                            0,
                            "linear",
                            "${RectangleCopy77}",
                            'none',
                            'block'
                        ],
                        [
                            "eid982",
                            "display",
                            9529,
                            0,
                            "linear",
                            "${RectangleCopy77}",
                            'block',
                            'none'
                        ],
                        [
                            "eid975",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy76}",
                            'none',
                            'none'
                        ],
                        [
                            "eid976",
                            "display",
                            4431,
                            0,
                            "linear",
                            "${RectangleCopy76}",
                            'none',
                            'block'
                        ],
                        [
                            "eid977",
                            "display",
                            9420,
                            0,
                            "linear",
                            "${RectangleCopy76}",
                            'block',
                            'none'
                        ],
                        [
                            "eid947",
                            "location",
                            3647,
                            4989,
                            "linear",
                            "${RectangleCopy69}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid963",
                            "location",
                            4103,
                            4989,
                            "linear",
                            "${RectangleCopy73}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid970",
                            "location",
                            4215,
                            4989,
                            "linear",
                            "${RectangleCopy74}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid1012",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy85}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1013",
                            "display",
                            5694,
                            0,
                            "linear",
                            "${RectangleCopy85}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1014",
                            "display",
                            10683,
                            0,
                            "linear",
                            "${RectangleCopy85}",
                            'block',
                            'none'
                        ],
                        [
                            "eid911",
                            "location",
                            2511,
                            4989,
                            "linear",
                            "${RectangleCopy60}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid1011",
                            "location",
                            5694,
                            4989,
                            "linear",
                            "${RectangleCopy85}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid990",
                            "location",
                            4765,
                            4989,
                            "linear",
                            "${RectangleCopy79}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid838",
                            "location",
                            113,
                            4989,
                            "linear",
                            "${RectangleCopy41}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid1023",
                            "location",
                            6108,
                            4989,
                            "linear",
                            "${RectangleCopy88}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid878",
                            "location",
                            1188,
                            4989,
                            "linear",
                            "${RectangleCopy51}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid1003",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy83}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1004",
                            "display",
                            5288,
                            0,
                            "linear",
                            "${RectangleCopy83}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1005",
                            "display",
                            10277,
                            0,
                            "linear",
                            "${RectangleCopy83}",
                            'block',
                            'none'
                        ],
                        [
                            "eid883",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy53}",
                            'none',
                            'none'
                        ],
                        [
                            "eid884",
                            "display",
                            1448,
                            0,
                            "linear",
                            "${RectangleCopy53}",
                            'none',
                            'block'
                        ],
                        [
                            "eid885",
                            "display",
                            6437,
                            0,
                            "linear",
                            "${RectangleCopy53}",
                            'block',
                            'none'
                        ],
                        [
                            "eid959",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy72}",
                            'none',
                            'none'
                        ],
                        [
                            "eid960",
                            "display",
                            3987,
                            0,
                            "linear",
                            "${RectangleCopy72}",
                            'none',
                            'block'
                        ],
                        [
                            "eid961",
                            "display",
                            8976,
                            0,
                            "linear",
                            "${RectangleCopy72}",
                            'block',
                            'none'
                        ],
                        [
                            "eid951",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy70}",
                            'none',
                            'none'
                        ],
                        [
                            "eid952",
                            "display",
                            3761,
                            0,
                            "linear",
                            "${RectangleCopy70}",
                            'none',
                            'block'
                        ],
                        [
                            "eid953",
                            "display",
                            8750,
                            0,
                            "linear",
                            "${RectangleCopy70}",
                            'block',
                            'none'
                        ],
                        [
                            "eid954",
                            "location",
                            3761,
                            4989,
                            "linear",
                            "${RectangleCopy70}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid984",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy78}",
                            'none',
                            'none'
                        ],
                        [
                            "eid985",
                            "display",
                            4652,
                            0,
                            "linear",
                            "${RectangleCopy78}",
                            'none',
                            'block'
                        ],
                        [
                            "eid986",
                            "display",
                            9641,
                            0,
                            "linear",
                            "${RectangleCopy78}",
                            'block',
                            'none'
                        ],
                        [
                            "eid875",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy51}",
                            'none',
                            'none'
                        ],
                        [
                            "eid876",
                            "display",
                            1188,
                            0,
                            "linear",
                            "${RectangleCopy51}",
                            'none',
                            'block'
                        ],
                        [
                            "eid877",
                            "display",
                            6177,
                            0,
                            "linear",
                            "${RectangleCopy51}",
                            'block',
                            'none'
                        ],
                        [
                            "eid855",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy46}",
                            'none',
                            'none'
                        ],
                        [
                            "eid856",
                            "display",
                            624,
                            0,
                            "linear",
                            "${RectangleCopy46}",
                            'none',
                            'block'
                        ],
                        [
                            "eid857",
                            "display",
                            5613,
                            0,
                            "linear",
                            "${RectangleCopy46}",
                            'block',
                            'none'
                        ],
                        [
                            "eid839",
                            "location",
                            229,
                            4989,
                            "linear",
                            "${RectangleCopy42}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid939",
                            "location",
                            3422,
                            4989,
                            "linear",
                            "${RectangleCopy67}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid874",
                            "location",
                            1075,
                            4989,
                            "linear",
                            "${RectangleCopy50}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid844",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy43}",
                            'none',
                            'none'
                        ],
                        [
                            "eid845",
                            "display",
                            334,
                            0,
                            "linear",
                            "${RectangleCopy43}",
                            'none',
                            'block'
                        ],
                        [
                            "eid846",
                            "display",
                            5288,
                            0,
                            "linear",
                            "${RectangleCopy43}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1008",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy84}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1009",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${RectangleCopy84}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1010",
                            "display",
                            10489,
                            0,
                            "linear",
                            "${RectangleCopy84}",
                            'block',
                            'none'
                        ],
                        [
                            "eid906",
                            "location",
                            2186,
                            4989,
                            "linear",
                            "${RectangleCopy58}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid902",
                            "location",
                            2011,
                            4989,
                            "linear",
                            "${RectangleCopy57}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid867",
                            "location",
                            962,
                            4989,
                            "linear",
                            "${RectangleCopy49}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ],
                        [
                            "eid930",
                            "location",
                            3083,
                            4989,
                            "linear",
                            "${RectangleCopy64}",
                            [[6.01, 6, 0, 0, 0, 0,0],[4.59, -83.84, -63.89, -8.23, -5.99, -0.77,89.9],[-72.9, -104.68, 1.6, -0.62, 4.81, -1.88,170.26],[-72.65, -125.62, -0.24, 4.68, -0.04, 0.71,191.21],[-597.27, -126.99, 0.45, 2.38, 0.49, 2.58,715.84],[-597.79, -54.2, 1.29, -0.96, 2.9, -2.15,788.65],[-793.48, -57.97, 0.46, -3.21, 0.58, -4.06,984.39],[-793.52, -291.82, 0, 0, 0, 0,1218.24]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Diagram_edgeActions.js");
})("EDGE-786634510");
