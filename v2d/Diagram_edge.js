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
                            id: 'strip',
                            type: 'image',
                            rect: ['0px', '15px', '1920px', '92px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"strip.svg",'0px','0px']
                        },
                        {
                            id: 'New_hedder',
                            type: 'image',
                            rect: ['593px', '38px', '748px', '54px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"New_hedder.svg",'0px','0px']
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['39px', '49px', '170px', '26px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo.svg",'0px','0px']
                        },
                        {
                            id: 'fotter_strip',
                            type: 'image',
                            rect: ['-45px', '1070px', '2024px', '9px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fotter_strip.svg",'0px','0px']
                        },
                        {
                            id: 'copyright',
                            type: 'image',
                            rect: ['195px', '993px', '1530px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"copyright.svg",'0px','0px']
                        },
                        {
                            id: 'one',
                            symbolName: 'one',
                            type: 'rect',
                            rect: ['265px', '318px', '302', '681', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'two',
                            symbolName: 'two',
                            type: 'rect',
                            rect: ['653px', '189', '302', '680', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'three',
                            symbolName: 'three',
                            type: 'rect',
                            rect: ['1037px', '186px', '626', '680', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['1032px', '778px', '169px', '117px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['1498px', '778px', '169px', '117px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'full_main',
                            symbolName: 'full_main',
                            type: 'rect',
                            rect: ['1839', '35', '55', '54', 'auto', 'auto']
                        },
                        {
                            id: 'four',
                            symbolName: 'four',
                            type: 'rect',
                            rect: ['663', '597px', '1000', '163', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'Part2',
                            type: 'image',
                            rect: ['795px', '426px', '2px', '294px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Part2.svg",'0px','0px']
                        },
                        {
                            id: 'Part3',
                            type: 'image',
                            rect: ['774px', '506px', '61px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Part3.svg",'0px','0px']
                        },
                        {
                            id: 'part1',
                            type: 'image',
                            rect: ['701px', '371px', '205px', '56px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"part1.svg",'0px','0px']
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
                            id: 'popup1',
                            symbolName: 'popup1',
                            display: 'none',
                            type: 'rect',
                            rect: ['-257px', '72px', '1421', '947', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.33638','0.33638']]
                        },
                        {
                            id: 'popup2',
                            symbolName: 'popup2',
                            display: 'none',
                            type: 'rect',
                            rect: ['78px', '30px', 'undefined', 'undefined', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0',
                            transform: [[],[],[],['0.24068','0.24068']]
                        },
                        {
                            id: 'popup3',
                            symbolName: 'popup3',
                            display: 'none',
                            type: 'rect',
                            rect: ['633px', '-19px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.31316','0.31316']]
                        },
                        {
                            id: 'popup4',
                            symbolName: 'popup4',
                            display: 'none',
                            type: 'rect',
                            rect: ['468px', '214px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.24842','0.24842']]
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
                    duration: 4856,
                    autoPlay: true,
                    labels: {
                        "restart": 0,
                        "popup1": 2560,
                        "B1": 3000,
                        "popup2": 3173,
                        "B2": 3588,
                        "popup3": 3775,
                        "B3": 4165,
                        "popup4": 4373,
                        "B4": 4767
                    },
                    data: [
                        [
                            "eid291",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${Part2}",
                            '400px',
                            '426px'
                        ],
                        [
                            "eid241",
                            "left",
                            2452,
                            0,
                            "linear",
                            "${one}",
                            '265px',
                            '265px'
                        ],
                        [
                            "eid271",
                            "display",
                            0,
                            0,
                            "linear",
                            "${popup3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid270",
                            "display",
                            3734,
                            0,
                            "linear",
                            "${popup3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid282",
                            "display",
                            4259,
                            0,
                            "linear",
                            "${popup3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid313",
                            "left",
                            4375,
                            392,
                            "linear",
                            "${popup4}",
                            '468px',
                            '287px'
                        ],
                        [
                            "eid319",
                            "display",
                            0,
                            0,
                            "linear",
                            "${popup4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid318",
                            "display",
                            4357,
                            0,
                            "linear",
                            "${popup4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid320",
                            "display",
                            4856,
                            0,
                            "linear",
                            "${popup4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid279",
                            "top",
                            3775,
                            390,
                            "linear",
                            "${popup3}",
                            '-19px',
                            '77px'
                        ],
                        [
                            "eid29",
                            "opacity",
                            2560,
                            440,
                            "linear",
                            "${popup1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "display",
                            0,
                            0,
                            "linear",
                            "${popup1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18",
                            "display",
                            2560,
                            0,
                            "linear",
                            "${popup1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid205",
                            "display",
                            3042,
                            0,
                            "linear",
                            "${popup1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid473",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'none',
                            'none'
                        ],
                        [
                            "eid472",
                            "display",
                            2560,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'none',
                            'block'
                        ],
                        [
                            "eid487",
                            "display",
                            3042,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'block',
                            'none'
                        ],
                        [
                            "eid488",
                            "display",
                            3173,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'none',
                            'block'
                        ],
                        [
                            "eid489",
                            "display",
                            3656,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'block',
                            'none'
                        ],
                        [
                            "eid490",
                            "display",
                            3775,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'none',
                            'block'
                        ],
                        [
                            "eid491",
                            "display",
                            4259,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'block',
                            'none'
                        ],
                        [
                            "eid492",
                            "display",
                            4373,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'none',
                            'block'
                        ],
                        [
                            "eid485",
                            "display",
                            4856,
                            0,
                            "linear",
                            "${Rectangle_Grey}",
                            'block',
                            'none'
                        ],
                        [
                            "eid281",
                            "opacity",
                            3775,
                            390,
                            "linear",
                            "${popup3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${one}",
                            '0',
                            '1'
                        ],
                        [
                            "eid227",
                            "top",
                            3173,
                            415,
                            "linear",
                            "${popup2}",
                            '30px',
                            '60px'
                        ],
                        [
                            "eid287",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${Part3}",
                            '506px',
                            '526px'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            500,
                            "linear",
                            "${one}",
                            '318px',
                            '188px'
                        ],
                        [
                            "eid420",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${four}",
                            '597px',
                            '617px'
                        ],
                        [
                            "eid299",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${Part2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "scaleY",
                            2560,
                            440,
                            "linear",
                            "${popup1}",
                            '0.33638',
                            '1'
                        ],
                        [
                            "eid20",
                            "scaleX",
                            2560,
                            440,
                            "linear",
                            "${popup1}",
                            '0.33638',
                            '1'
                        ],
                        [
                            "eid24",
                            "left",
                            2560,
                            440,
                            "linear",
                            "${popup1}",
                            '-257px',
                            '274px'
                        ],
                        [
                            "eid240",
                            "left",
                            2452,
                            0,
                            "linear",
                            "${two}",
                            '653px',
                            '653px'
                        ],
                        [
                            "eid6",
                            "opacity",
                            675,
                            500,
                            "linear",
                            "${two}",
                            '0',
                            '1'
                        ],
                        [
                            "eid277",
                            "left",
                            3775,
                            390,
                            "linear",
                            "${popup3}",
                            '633px',
                            '283px'
                        ],
                        [
                            "eid275",
                            "scaleY",
                            3775,
                            390,
                            "linear",
                            "${popup3}",
                            '0.31316',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            1330,
                            500,
                            "linear",
                            "${three}",
                            '0',
                            '1'
                        ],
                        [
                            "eid273",
                            "scaleX",
                            3775,
                            390,
                            "linear",
                            "${popup3}",
                            '0.31316',
                            '1'
                        ],
                        [
                            "eid476",
                            "opacity",
                            2560,
                            440,
                            "linear",
                            "${Rectangle_Grey}",
                            '0',
                            '0.9024389982223511'
                        ],
                        [
                            "eid480",
                            "opacity",
                            3173,
                            415,
                            "linear",
                            "${Rectangle_Grey}",
                            '0',
                            '0.9024389982223511'
                        ],
                        [
                            "eid483",
                            "opacity",
                            3775,
                            390,
                            "linear",
                            "${Rectangle_Grey}",
                            '0',
                            '0.9024389982223511'
                        ],
                        [
                            "eid486",
                            "opacity",
                            4373,
                            394,
                            "linear",
                            "${Rectangle_Grey}",
                            '0',
                            '0.9024389982223511'
                        ],
                        [
                            "eid7",
                            "top",
                            1330,
                            500,
                            "linear",
                            "${three}",
                            '319px',
                            '186px'
                        ],
                        [
                            "eid295",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${Part3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid297",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${part1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid223",
                            "scaleY",
                            3173,
                            415,
                            "linear",
                            "${popup2}",
                            '0.24068',
                            '1'
                        ],
                        [
                            "eid221",
                            "scaleX",
                            3173,
                            415,
                            "linear",
                            "${popup2}",
                            '0.24068',
                            '1'
                        ],
                        [
                            "eid317",
                            "opacity",
                            4375,
                            392,
                            "linear",
                            "${popup4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid311",
                            "scaleY",
                            4375,
                            392,
                            "linear",
                            "${popup4}",
                            '0.24842',
                            '1'
                        ],
                        [
                            "eid422",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${four}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5",
                            "top",
                            675,
                            500,
                            "linear",
                            "${two}",
                            '319px',
                            '189px'
                        ],
                        [
                            "eid30",
                            "top",
                            1175,
                            0,
                            "linear",
                            "${two}",
                            '189px',
                            '189px'
                        ],
                        [
                            "eid229",
                            "opacity",
                            3173,
                            415,
                            "linear",
                            "${popup2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid225",
                            "left",
                            3173,
                            415,
                            "linear",
                            "${popup2}",
                            '78px',
                            '274px'
                        ],
                        [
                            "eid289",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${part1}",
                            '346px',
                            '371px'
                        ],
                        [
                            "eid219",
                            "display",
                            0,
                            0,
                            "linear",
                            "${popup2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid206",
                            "display",
                            3148,
                            0,
                            "linear",
                            "${popup2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid230",
                            "display",
                            3656,
                            0,
                            "linear",
                            "${popup2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid26",
                            "top",
                            2560,
                            440,
                            "linear",
                            "${popup1}",
                            '72px',
                            '60px'
                        ],
                        [
                            "eid309",
                            "scaleX",
                            4375,
                            392,
                            "linear",
                            "${popup4}",
                            '0.24842',
                            '1'
                        ],
                        [
                            "eid315",
                            "top",
                            4375,
                            392,
                            "linear",
                            "${popup4}",
                            '214px',
                            '63px'
                        ]
                    ]
                }
            },
            "one": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-4px', '0px', '312px', '686px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Pasted',
                            opacity: '0.9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted.svg', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '-16px', '309px', '704px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '302px', '681px']
                        }
                    }
                },
                timeline: {
                    duration: 57,
                    autoPlay: true,
                    labels: {
                        "go": 0,
                        "go_back": 49
                    },
                    data: [
                        [
                            "eid592",
                            "filter.contrast",
                            0,
                            57,
                            "linear",
                            "${Pasted}",
                            '1',
                            '1.15'
                        ],
                        [
                            "eid591",
                            "filter.saturate",
                            0,
                            57,
                            "linear",
                            "${Pasted}",
                            '1',
                            '1.42'
                        ]
                    ]
                }
            },
            "three": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-2px', '1px', '631px', '685px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Pasted3',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted3.svg', '0px', '0px']
                        },
                        {
                            rect: ['-19px', '-17px', '660px', '714px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'RectangleCopy',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '626px', '680px']
                        }
                    }
                },
                timeline: {
                    duration: 57,
                    autoPlay: true,
                    labels: {
                        "go": 0,
                        "go_back": 51
                    },
                    data: [
                        [
                            "eid603",
                            "filter.saturate",
                            0,
                            56,
                            "linear",
                            "${Pasted3}",
                            '1',
                            '1.42'
                        ],
                        [
                            "eid604",
                            "filter.contrast",
                            0,
                            56,
                            "linear",
                            "${Pasted3}",
                            '1',
                            '1.15'
                        ]
                    ]
                }
            },
            "two": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-2px', '-3px', '305px', '686px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Pasted22',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted2.svg', '0px', '0px']
                        },
                        {
                            rect: ['-9px', '-17px', '318px', '718px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '302px', '680px']
                        }
                    }
                },
                timeline: {
                    duration: 57,
                    autoPlay: true,
                    labels: {
                        "go": 0,
                        "go_back": 51
                    },
                    data: [
                        [
                            "eid597",
                            "filter.saturate",
                            0,
                            57,
                            "linear",
                            "${Pasted22}",
                            '1',
                            '1.42'
                        ],
                        [
                            "eid598",
                            "filter.contrast",
                            0,
                            57,
                            "linear",
                            "${Pasted22}",
                            '1',
                            '1.15'
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
            "popup1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['202px', '16px', '979px', '914px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            id: 'Management_0821',
                            type: 'image',
                            rect: ['211px', '24px', '960px', '898px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Management_0821.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.66667', '0.66667']],
                            id: 'close',
                            symbolName: 'close',
                            cursor: 'pointer',
                            rect: ['1127px', '-21px', '90', '90', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1421px', '947px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid430",
                            "top",
                            0,
                            0,
                            "linear",
                            "${close}",
                            '-21px',
                            '-21px'
                        ],
                        [
                            "eid431",
                            "left",
                            0,
                            0,
                            "linear",
                            "${close}",
                            '1127px',
                            '1127px'
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
                            rect: ['0px', '0px', '55px', '54px', 'auto', 'auto'],
                            id: 'Pasted7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted7.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Symbol_1',
                            symbolName: 'Symbol_1',
                            transform: [[], [], [], ['1.13636', '1.13636']],
                            rect: ['6px', '6px', '44px', '44', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '55px', '54px']
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,148,210,1.00)']
                        },
                        {
                            id: 'Pasted8',
                            type: 'image',
                            rect: ['3px', '3px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted8.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '44px', '44px']
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
            "Symbol_2": {
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
                            rect: ['7px', '0px', '4px', '6px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(0,91,130,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['14px', '0px', '4px', '6px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(74,255,34,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['21px', '0px', '4px', '6px', 'auto', 'auto'],
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(210,0,72,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '4px', '6px', 'auto', 'auto'],
                            id: 'Rectangle2Copy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(210,0,72,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['28px', '0px', '4px', '6px', 'auto', 'auto'],
                            id: 'Rectangle2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(0,91,130,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['35px', '0px', '4px', '6px', 'auto', 'auto'],
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(74,255,34,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['48px', '0px', '4px', '6px', 'auto', 'auto'],
                            id: 'Rectangle2Copy13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(74,255,34,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['41px', '0px', '4px', '6px', 'auto', 'auto'],
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(210,0,72,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '52px', '6px']
                        }
                    }
                },
                timeline: {
                    duration: 334,
                    autoPlay: true,
                    data: [
                        [
                            "eid106",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid115",
                            "display",
                            21,
                            0,
                            "linear",
                            "${Rectangle2Copy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid127",
                            "display",
                            171,
                            0,
                            "linear",
                            "${Rectangle2Copy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid110",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            37,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid123",
                            "display",
                            202,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid109",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid118",
                            "display",
                            115,
                            0,
                            "linear",
                            "${Rectangle2Copy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid124",
                            "display",
                            271,
                            0,
                            "linear",
                            "${Rectangle2Copy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid114",
                            "display",
                            21,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid121",
                            "display",
                            187,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            88,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid126",
                            "display",
                            237,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid116",
                            "display",
                            158,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid128",
                            "display",
                            291,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            37,
                            0,
                            "linear",
                            "${Rectangle2Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid125",
                            "display",
                            187,
                            0,
                            "linear",
                            "${Rectangle2Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            158,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid122",
                            "display",
                            334,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "lights": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Symbol_2',
                            rect: ['0px', '0px', '52', '6', 'auto', 'auto'],
                            symbolName: 'Symbol_2',
                            type: 'rect'
                        },
                        {
                            id: 'Symbol_2Copy2',
                            rect: ['0px', '13px', '52', '6', 'auto', 'auto'],
                            symbolName: 'Symbol_2',
                            type: 'rect'
                        },
                        {
                            rect: ['90px', '13px', '52', '6', 'auto', 'auto'],
                            id: 'Symbol_2Copy3',
                            symbolName: 'Symbol_2',
                            type: 'rect',
                            transform: [[], ['-180'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['90px', '0px', '52', '6', 'auto', 'auto'],
                            id: 'Symbol_2Copy4',
                            symbolName: 'Symbol_2',
                            type: 'rect',
                            transform: [[], ['-180'], [0, 0, 0], [1, 1, 1]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '142px', '19px']
                        }
                    }
                },
                timeline: {
                    duration: 97,
                    autoPlay: true,
                    data: [
                        [
                            "eid138",
                            "left",
                            97,
                            0,
                            "linear",
                            "${Symbol_2Copy3}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid136",
                            "top",
                            97,
                            0,
                            "linear",
                            "${Symbol_2Copy2}",
                            '13px',
                            '13px'
                        ],
                        [
                            "eid137",
                            "top",
                            97,
                            0,
                            "linear",
                            "${Symbol_2Copy3}",
                            '13px',
                            '13px'
                        ],
                        [
                            "eid144",
                            "rotateZ",
                            97,
                            0,
                            "linear",
                            "${Symbol_2Copy3}",
                            '-180deg',
                            '-180deg'
                        ],
                        [
                            "eid139",
                            "left",
                            97,
                            0,
                            "linear",
                            "${Symbol_2Copy4}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid145",
                            "rotateZ",
                            97,
                            0,
                            "linear",
                            "${Symbol_2Copy4}",
                            '-180deg',
                            '-180deg'
                        ],
                        [
                            "eid142",
                            "top",
                            97,
                            0,
                            "linear",
                            "${Symbol_2Copy4}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "popup2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['223px', '48px', '977px', '875px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            id: 'Edge_0820',
                            type: 'image',
                            rect: ['231px', '55px', '960px', '860px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Edge_0820.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.66667', '0.66667']],
                            id: 'close',
                            symbolName: 'close',
                            cursor: 'pointer',
                            rect: ['1146px', '10px', '90', '90', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1421px', '947px']
                        }
                    }
                },
                timeline: {
                    duration: 3608,
                    autoPlay: true,
                    data: [
                        [
                            "eid433",
                            "top",
                            3608,
                            0,
                            "linear",
                            "${close}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid432",
                            "left",
                            3608,
                            0,
                            "linear",
                            "${close}",
                            '1146px',
                            '1146px'
                        ]
                    ]
                }
            },
            "popup3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['202px', '60px', '976px', '854px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            id: 'Compute0820',
                            type: 'image',
                            rect: ['210px', '68px', '960px', '837px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Compute0820.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.66667', '0.66667']],
                            id: 'close',
                            symbolName: 'close',
                            cursor: 'pointer',
                            rect: ['1125px', '23px', '90', '90', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1421px', '947px']
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
            "popup4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['102px', '67px', '1218px', '816px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            id: 'ComputeTransport_0820',
                            type: 'image',
                            rect: ['111px', '76px', '1200px', '798px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ComputeTransport_0820.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.66667', '0.66667']],
                            id: 'close',
                            symbolName: 'close',
                            cursor: 'pointer',
                            rect: ['1266px', '-18px', '90', '90', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'circle_animation',
                            rect: ['1163', '395', '25', '25', 'auto', 'auto'],
                            id: 'circle_animation'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1421px', '947px']
                        }
                    }
                },
                timeline: {
                    duration: 3881,
                    autoPlay: true,
                    data: [
                        [
                            "eid439",
                            "top",
                            0,
                            0,
                            "linear",
                            "${close}",
                            '-18px',
                            '31px'
                        ],
                        [
                            "eid441",
                            "display",
                            0,
                            0,
                            "linear",
                            "${circle_animation}",
                            'none',
                            'none'
                        ],
                        [
                            "eid440",
                            "display",
                            83,
                            0,
                            "linear",
                            "${circle_animation}",
                            'none',
                            'block'
                        ],
                        [
                            "eid438",
                            "left",
                            0,
                            0,
                            "linear",
                            "${close}",
                            '1335px',
                            '1266px'
                        ]
                    ]
                }
            },
            "four": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-3px', '0px', '1000px', '163px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Part4',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Part4.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1000px', '163px']
                        }
                    }
                },
                timeline: {
                    duration: 57,
                    autoPlay: true,
                    labels: {
                        "go": 0,
                        "go_back": 51
                    },
                    data: [
                        [
                            "eid609",
                            "filter.contrast",
                            0,
                            57,
                            "linear",
                            "${Part4}",
                            '1',
                            '1.15'
                        ],
                        [
                            "eid608",
                            "filter.saturate",
                            0,
                            57,
                            "linear",
                            "${Part4}",
                            '1',
                            '1.42'
                        ]
                    ]
                }
            },
            "circle_animation": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-895px', '3px', '17px', '17px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [2, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'Ellipse1',
                            opacity: '0',
                            type: 'ellipse',
                            fill: ['rgba(236,255,169,1.00)']
                        },
                        {
                            rect: ['-246px', '3px', '17px', '17px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [2, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'Ellipse2',
                            opacity: '0',
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: ['22px', '203px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [2, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'Ellipse3',
                            opacity: '0',
                            type: 'ellipse',
                            fill: ['rgba(12,31,99,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '25px', '25px']
                        }
                    }
                },
                timeline: {
                    duration: 3881,
                    autoPlay: true,
                    labels: {
                        "A": 301,
                        "B": 800
                    },
                    data: [
                        [
                            "eid455",
                            "left",
                            1794,
                            356,
                            "linear",
                            "${Ellipse3}",
                            '0px',
                            '-39px'
                        ],
                        [
                            "eid457",
                            "left",
                            2926,
                            824,
                            "linear",
                            "${Ellipse3}",
                            '-39px',
                            '22px'
                        ],
                        [
                            "eid463",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid460",
                            "opacity",
                            1024,
                            230,
                            "linear",
                            "${Ellipse2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid452",
                            "opacity",
                            3739,
                            140,
                            "linear",
                            "${Ellipse2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid443",
                            "top",
                            1418,
                            536,
                            "linear",
                            "${Ellipse1}",
                            '3px',
                            '-77px'
                        ],
                        [
                            "eid445",
                            "top",
                            3297,
                            423,
                            "linear",
                            "${Ellipse1}",
                            '-77px',
                            '-210px'
                        ],
                        [
                            "eid546",
                            "height",
                            966,
                            0,
                            "linear",
                            "${Ellipse3}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid456",
                            "top",
                            2149,
                            777,
                            "linear",
                            "${Ellipse3}",
                            '4px',
                            '203px'
                        ],
                        [
                            "eid567",
                            "top",
                            2926,
                            824,
                            "linear",
                            "${Ellipse3}",
                            '203px',
                            '201px'
                        ],
                        [
                            "eid549",
                            "width",
                            1418,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid454",
                            "border-color",
                            2514,
                            0,
                            "linear",
                            "${Ellipse1}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid442",
                            "left",
                            966,
                            452,
                            "linear",
                            "${Ellipse1}",
                            '0px',
                            '-103px'
                        ],
                        [
                            "eid444",
                            "left",
                            1953,
                            1344,
                            "linear",
                            "${Ellipse1}",
                            '-103px',
                            '-895px'
                        ],
                        [
                            "eid461",
                            "opacity",
                            1620,
                            175,
                            "linear",
                            "${Ellipse3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid458",
                            "opacity",
                            3750,
                            129,
                            "linear",
                            "${Ellipse3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid547",
                            "width",
                            966,
                            0,
                            "linear",
                            "${Ellipse3}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid548",
                            "height",
                            1418,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid551",
                            "width",
                            1418,
                            0,
                            "linear",
                            "${Ellipse1}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid464",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${Ellipse3}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid566",
                            "top",
                            1254,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '1px',
                            '3px'
                        ],
                        [
                            "eid448",
                            "top",
                            1753,
                            463,
                            "linear",
                            "${Ellipse2}",
                            '3px',
                            '-78px'
                        ],
                        [
                            "eid450",
                            "top",
                            3048,
                            329,
                            "linear",
                            "${Ellipse2}",
                            '-78px',
                            '3px'
                        ],
                        [
                            "eid550",
                            "height",
                            1418,
                            0,
                            "linear",
                            "${Ellipse1}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid447",
                            "left",
                            1254,
                            499,
                            "linear",
                            "${Ellipse2}",
                            '0px',
                            '-101px'
                        ],
                        [
                            "eid449",
                            "left",
                            2215,
                            833,
                            "linear",
                            "${Ellipse2}",
                            '-101px',
                            '-369px'
                        ],
                        [
                            "eid451",
                            "left",
                            3377,
                            364,
                            "linear",
                            "${Ellipse2}",
                            '-369px',
                            '-246px'
                        ],
                        [
                            "eid462",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${Ellipse1}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid453",
                            "border-color",
                            2614,
                            0,
                            "linear",
                            "${Ellipse2}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid459",
                            "opacity",
                            800,
                            168,
                            "linear",
                            "${Ellipse1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid446",
                            "opacity",
                            3720,
                            161,
                            "linear",
                            "${Ellipse1}",
                            '1',
                            '0'
                        ]
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
                            id: 'exit_full',
                            type: 'image',
                            rect: ['0px', '0px', '44px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/exit_full.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '44px', '44px']
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
                            type: 'rect',
                            rect: ['0px', '0px', '55', '54', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'full_screen',
                            cursor: 'pointer',
                            id: 'full_screen'
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.22727', '1.22727']],
                            rect: ['6px', '5px', '44', '44', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'exit_fullscreen',
                            cursor: 'pointer',
                            id: 'exit_fullscreen'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '55px', '54px']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Diagram_edgeActions.js");
})("EDGE-14118920");
