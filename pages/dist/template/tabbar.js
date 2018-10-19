// 保存通用的页面 this
let _page;
let _isPageInited = false;
let _dataForTabbar;

export function init( params ) {
    // 统一处理页面的数据，合并用户数据跟tabbar组件的数据

    let app = getApp()
    let {
        data
    } = params;

    // 默认的tabbar数据对象
    // 默认使用template目录下的img文件夹里的图标文件
    let defaultTabbarData = [
        {
            iCount: 1, //未读数目
            sIconUrl: Img("note"), //按钮图标
            sTitle: "note", //按钮名称
        },
        {
            iCount: 98, //未读数目
            sIconUrl: Img("home"), //按钮图标
            sTitle: "home", //按钮名称
        },
        {
            iCount: 0, //未读数目
            sIconUrl: Img("safari"), //按钮图标
            sTitle: "safari", //按钮名称
        },
    ];


    // 页面的Data和Tabbar页面的Data合并成新的
    data.jhDataForTabbar = _dataForTabbar || defaultTabbarData;

    // 父级 生命周期函数重命名
    let _super =  {
        onLoad: params.onLoad || empty,
        onReady: params.onReady || empty,
        onShow: params.onShow || empty,
        onHide: params.onHide || empty,
        onUnload: params.onUnload || empty,
        onPullDownRefresh: params.onPullDownRefresh || empty,
        onReachBottom: params.onReachBottom || empty
    }


    let initObject = {
        data,

        /**
          * 生命周期函数
        */
        onLoad() {
            // 调用用户定义的生命周期函数
            _super.onLoad.bind(this)();

            // 保存this到_page
            _page = this
        },
        onReady() {
            // 调用用户定义的生命周期函数
            _super.onReady.bind(this)();
        },
        onShow() {
            // 调用用户定义的生命周期函数
            _super.onShow.bind(this)();
        },
        onHide() {
            // 调用用户定义的生命周期函数
            _super.onHide.bind(this)();
        },
        onUnload() {
            // 调用用户定义的生命周期函数
            _super.onUnload.bind(this)();
        },
        onPullDownRefresh() {
            // 调用用户定义的生命周期函数
            _super.onPullDownRefresh.bind(this)();
        },
        onReachBottom() {
            // 调用用户定义的生命周期函数
            _super.onReachBottom.bind(this)();
        },


        /**
          * 逻辑绑定
        */
        // 单击tab触发的函数
        onTabbarItemTap(ev) {
            let key = ev.currentTarget.dataset.key;
            setCounts({
                key
            });
        },
    };

    for (let key in params) {
        // 如果initObject中没有同名的key，复制params的对象到initObject
        if (initObject[ key ] === undefined) {
            initObject[ key ] = params[ key ];
        }
    }

    Page(initObject);
    _isPageInited = true;



    // 空函数
    function empty() {}
}

export function setTabbarData( obj ) {

    // 页面还没 init时，把 obj 先存到 _dataForTabbar
    // else 通过page.setData更新
    if (_isPageInited === false) {
        _dataForTabbar = obj;
    } else {
        page.setData({
            jhDataForTabbar: obj
        });
    }

    return init;
}




/**
  * 辅助函数
*/
// 生成img文件的目录
function Img(filename, state) {
    const IMG_FILES_FOLDER = "../template/img/";
    const SUBFIX = ".png";

    if (state === undefined) {
        return [
            IMG_FILES_FOLDER,
            filename,
            SUBFIX
        ].join("");
    } else {
        return [
            IMG_FILES_FOLDER,
            filename,
            "-",
            state,
            SUBFIX
        ].join("");
    }
}

function setCounts( obj ) {
    let {
        key
    } = obj;
    let {
        jhDataForTabbar
    } = _page.data;

    let data = jhDataForTabbar.map((item) => {
        let {
            iCount,
            sIconUrl,
            sTitle
        } = item;

        if (sTitle === key) {
            ++iCount;
        }
        return {
            iCount,
            sIconUrl,
            sTitle
        };
    });

    _page.setData({
        jhDataForTabbar: data
    })
}
