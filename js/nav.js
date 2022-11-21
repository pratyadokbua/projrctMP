let nav = new Vue({
    el: "#nav",
    data: {
        isActivate: false,
        items: [
            {
                title: "หน้าหลัก",
                color: "#FFC635",
                to: "#home"
            },
            {
                title: "เนื้อเรื่อง",
                color: "#F1592A",
                to: "#story"
            },
            {
                title: "ยุคก่อนประวัติศาสตร์",
                color: "#238AAB",
                to: "#befHistory"
            },
            {
                title: "ยุคสมัยก่อนสุโขทัย",
                color: "#6FA764",
                to: "#befSukhothai"
            },
            {
                title: "ยุคสุโขทัย",
                color: "#8F663A",
                to: "#sukhothai"
            },
            {
                title: "ยุคอยุธยา",
                color: "#E7918A",
                to: "#ayuthaya"
            },
            {
                title: "ยุคกรุงธนบุรี",
                color: "#C3C700",
                to: "#thonburi"
            },
            {
                title: "ยุคกรุงรัตนโกสินทร์",
                color: "#E16863",
                to: "#rattanakosin"
            }
            
        ]
    },
    methods:{
        scrollTo: function(el){
            let to = document.querySelector(el)
            to.scrollIntoView();
        }
    }
})