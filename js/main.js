$(document).ready(function () {
    $(function () {
        // 工作經驗從 Google sheet 取資料
        // jQuery 方式 get 資料
        $.get('https://spreadsheets.google.com/feeds/list/1MpHCJrZaWamnOdu3MvOLOBNhn75CKxW6ddYnEmMdyhE/1/public/values?alt=json', function (data) {
            // console.log(data);
            const experienceData = data.feed.entry;
            // console.table(experienceData);
            let items = [];
            for (let i in experienceData) {
                let item = {};
                item.time = experienceData[i].gsx$time.$t;
                item.company = experienceData[i].gsx$company.$t;
                item.department = experienceData[i].gsx$department.$t;
                item.position = experienceData[i].gsx$position.$t;
                item.detail = experienceData[i].gsx$detail.$t;
                items.push(item);
            }
            // console.table(items);

            for (let i in items) {
                const experienceItemLayout = document.createElement("div");
                const experienceTime = document.createElement("div");
                const experienceCompany = document.createElement("div");
                const experienceDetail = document.createElement("div");
                const experienceContainer = document.getElementById("section_experience");
                experienceItemLayout.classList.add("col-xs-12");
                experienceItemLayout.classList.add("col-sm-6");
                experienceItemLayout.classList.add("experience");
                experienceTime.classList.add("time");
                experienceCompany.classList.add("company");
                experienceDetail.classList.add("detail");
                experienceTime.innerText = items[i].time;
                experienceCompany.innerText = items[i].company + " / " + items[i].department + " / " + items[i].position;
                experienceDetail.innerHTML = items[i].detail;
                experienceItemLayout.appendChild(experienceTime);
                experienceItemLayout.appendChild(experienceCompany);
                experienceItemLayout.appendChild(experienceDetail);
                experienceContainer.appendChild(experienceItemLayout);
            }

        });

        // 學歷從 Google sheet 取資料
        // fetch 方式
        // 用 innerHTML 方式
        fetch('https://spreadsheets.google.com/feeds/list/1MpHCJrZaWamnOdu3MvOLOBNhn75CKxW6ddYnEmMdyhE/2/public/values?alt=json')
            .then(function (response) {
                // console.log(response);
                return response.json();
            })
            .then(function (myJson) {
                // console.table(myJson.feed.entry);
                const educationData = myJson.feed.entry;
                let items = [];
                for (let i in educationData) {
                    let item = {};
                    item.time = educationData[i].gsx$time.$t;
                    item.school = educationData[i].gsx$school.$t;
                    item.department = educationData[i].gsx$department.$t;
                    item.graduate = educationData[i].gsx$graduate.$t;
                    item.detail = educationData[i].gsx$detail.$t;
                    items.push(item);
                }
                // console.table(items);
                let educationHTML;
                for (let i in items) {
                    const educationContainer = document.getElementById("section_education");
                    educationContainer.innerHTML += `<div class="col-xs-12 col-sm-6 education">
                <div class="time">${items[i].time}</div>
                <div class="school">${items[i].school}</div>
                <div class="department">${items[i].department}</div>
                <div class="graduate">${items[i].graduate}</div>
                </div>`;

                }
            });
    });

    //menu function
    const navSwitch = document.getElementById("navSwitch");
    let navItems = document.getElementById("navItems");
    const navItemsStatus = navItems.style.display;
    navSwitch.addEventListener("click", function () {
        const navItems = document.getElementById("navItems");
        const navItemsOpacity = navItems.style.opacity;
        navItemsOpacity !== "1" ? navItems.style.opacity = "1" : navItems.style.opacity = "0";
    });

    $("a[href*='#']:not([href='#'])").click(function (e) {
        e.preventDefault();
        var hash = this.hash;
        var section = $(hash);

        if (hash) {
            $('html, body').animate({
                scrollTop: section.offset().top
            }, 1000, 'swing', function () {
                history.replaceState({}, "", hash);
            });
        }
    });
});