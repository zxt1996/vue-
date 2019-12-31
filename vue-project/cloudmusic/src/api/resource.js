let API_ROOT = 'http://netease.bluej.cn';

const apiMusic = {
    phonelogin:'/login/cellphone',//手机登录
    getverify:'/captcha/sent',//发送验证码
    forverify:'/captcha/verify',//验证验证码
    phoneregister:'/register/cellphone',//注册
    verifyphone:'/cellphone/existence/check',//检测手机号码是否已注册
    initname:'/activate/init/profile',//初始化昵称
    userlogout:'/logout',//退出登录
    userdetail:'/user/detail',//获取用户详情
    userplaylist:'/user/playlist',//获取用户歌单
    userdj:'/user/dj',//获取用户电台
    userfollows:'/user/follows',//获取用户关注列表
    artlistlist:'/artist/list',//歌手分类列表
    artisthotsong:'/artist/top/song',//歌手热门50首歌曲
    palylistcatlist:'/playlist/catlist',//歌单分类
    playlisthot:'/playlist/hot',//热门歌单分类
    topplaylist:'/top/playlist',//歌单 ( 网友精选碟 )
    highquality:'/top/playlist/highquality',//获取精品歌单
    relatedplaylist:'/related/playlist',//相关歌单推荐
    playlistdetail:'/playlist/detail',//获取歌单详情
    songurl:'/song/url',//获取音乐 url
    songsearch:'/search',//搜索
    searchdefault:'/search/default',//默认搜索关键词
    searchhot:'/search/hot',//热搜列表(简略)
    searchhotdetail:'/search/hot/detail',//热搜列表(详细)
    searchsuggest:'/search/suggest',//搜索建议
    searchmultimatch:'/search/multimatch',//搜索多重匹配
    playlistcreate:'/playlist/create',//新建歌单
    playlistdelete:'/playlist/delete',//删除歌单
    playlistsubscribe:'/playlist/subscribe',//收藏/取消收藏歌单
    songlyric:'/lyric',//获取歌词
    topsong:'/top/song',//新歌速递
    commentmusic:'/comment/music',//歌曲评论
    commentalbum:'/comment/album',//专辑评论
    commenthot:'/comment/hot',//热门评论
    commentlike:'/comment/like',//给评论点赞
    mycomment:'/comment',//发送评论
    bannerlist:'/banner',//轮播图
    songdetail:'/song/detail',//获取歌曲详情
    albumdetail:'/album',//获取专辑内容
    albumdetaildynamic:'/album/detail/dynamic',//专辑动态信息
    albumsub:'/album/sub',//收藏/取消收藏专辑
    albumsublist:'/album/sublist',//获取已收藏专辑列表
    artists:'/artists',//获取歌手单曲
    artistalbum:'/artist/album',//获取歌手专辑
    artistdesc:'/artist/desc',//获取歌手描述
    recommendresource:'/recommend/resource',//获取每日推荐歌单
    recommendsongs:'/recommend/songs',//获取每日推荐歌曲
    mylike:'/like',//喜欢音乐
    likelist:'/likelist',//喜欢音乐列表
    albumnewest:'/album/newest',//最新专辑
    topartists:'/top/artists',//热门歌手
    personalized:'/personalized',//推荐歌单
    personalizednewsong:'/personalized/newsong',//推荐新音乐
    toplist:'/top/list',//排行榜
    toplists:'/toplist',//所有榜单
    personalizedmv:'/personalized/mv',//推荐MV
    toplistartist:'/toplist/artist',//歌手榜
}

let PhoneLogin = API_ROOT+(apiMusic.phonelogin);
let GetVerify = API_ROOT+(apiMusic.getverify);
let ForVerify = API_ROOT+(apiMusic.forverify);
let PhoneRegister = API_ROOT+(apiMusic.phoneregister);
let VerifyPhone = API_ROOT+(apiMusic.verifyphone);
let InitName = API_ROOT+(apiMusic.initname);
let UserLogout = API_ROOT+(apiMusic.userlogout);
let UserDetail = API_ROOT+(apiMusic.userdetail);
let UserPlaylist = API_ROOT+(apiMusic.userplaylist);
let UserDj = API_ROOT+(apiMusic.userdj);
let UserFollows = API_ROOT+(apiMusic.userfollows);
let ArtListlist = API_ROOT+(apiMusic.artlistlist);
let ArtistHotSong = API_ROOT+(apiMusic.artisthotsong);
let PalylistCatlist = API_ROOT+(apiMusic.palylistcatlist);
let PlaylistHot = API_ROOT+(apiMusic.playlisthot);
let TopPlaylist = API_ROOT+(apiMusic.topplaylist);
let Highquality = API_ROOT+(apiMusic.highquality);
let RelatedPlaylist = API_ROOT+(apiMusic.relatedplaylist);
let PlaylistDetail = API_ROOT+(apiMusic.playlistdetail);
let SongUrl = API_ROOT+(apiMusic.songurl);
let SongSearch = API_ROOT+(apiMusic.songsearch);
let SearchDefault = API_ROOT+(apiMusic.searchdefault);
let SearchHot = API_ROOT+(apiMusic.searchhot);
let SearchHotdetail = API_ROOT+(apiMusic.searchhotdetail);
let SearchSuggest = API_ROOT+(apiMusic.searchsuggest);
let SearchMultimatch = API_ROOT+(apiMusic.searchmultimatch);
let PlaylistCreate = API_ROOT+(apiMusic.playlistcreate);
let PlaylistDelete = API_ROOT+(apiMusic.playlistdelete);
let PlaylistSubscribe = API_ROOT+(apiMusic.playlistsubscribe);
let SongLyric = API_ROOT+(apiMusic.songlyric);
let TopSong = API_ROOT+(apiMusic.topsong);
let CommentMusic = API_ROOT+(apiMusic.commentmusic);
let CommentAlbum = API_ROOT+(apiMusic.commentalbum);
let CommentHot = API_ROOT+(apiMusic.commenthot);
let CommentLike = API_ROOT+(apiMusic.commentlike);
let MyComment = API_ROOT+(apiMusic.mycomment);
let BannerList = API_ROOT+(apiMusic.bannerlist);
let SongDetail = API_ROOT+(apiMusic.songdetail);
let AlbumDetail = API_ROOT+(apiMusic.albumdetail);
let AlbumdetailDynamic = API_ROOT+(apiMusic.albumdetaildynamic);
let AlbumSub = API_ROOT+(apiMusic.albumsub);
let AlbumSublist = API_ROOT+(apiMusic.albumsublist);
let Artists = API_ROOT+(apiMusic.artists);
let ArtistAlbum = API_ROOT+(apiMusic.artistalbum);
let ArtistDesc = API_ROOT+(apiMusic.artistdesc);
let RecommendResource = API_ROOT+(apiMusic.recommendresource);
let RecommendSongs = API_ROOT+(apiMusic.recommendsongs);
let MyLike = API_ROOT+(apiMusic.mylike);
let LikeList = API_ROOT+(apiMusic.likelist);
let AlbumNewest = API_ROOT+(apiMusic.albumnewest);
let TopArtists = API_ROOT+(apiMusic.topartists);
let Personalized = API_ROOT+(apiMusic.personalized);
let PersonalizedNewsong = API_ROOT+(apiMusic.personalizednewsong);
let TopList = API_ROOT+(apiMusic.toplist);
let TopLists = API_ROOT+(apiMusic.toplists);
let PersonalizedMv = API_ROOT+(apiMusic.personalizedmv);
let ToplistArtist = API_ROOT+(apiMusic.toplistartist);

export default{
    PhoneLogin,
    GetVerify,
    ForVerify,
    PhoneRegister,
    VerifyPhone,
    InitName,
    UserLogout,
    UserDetail,
    UserPlaylist,
    UserDj,
    UserFollows,
    ArtListlist,
    ArtistHotSong,
    PalylistCatlist,
    PlaylistHot,
    TopPlaylist,
    Highquality,
    RelatedPlaylist,
    PlaylistDetail,
    SongUrl,
    SongSearch,
    SearchDefault,
    SearchHot,
    SearchHotdetail,
    SearchSuggest,
    SearchMultimatch,
    PlaylistCreate,
    PlaylistDelete,
    PlaylistSubscribe,
    SongLyric,
    TopSong,
    CommentMusic,
    CommentAlbum,
    CommentHot,
    CommentLike,
    MyComment,
    BannerList,
    SongDetail,
    AlbumDetail,
    AlbumdetailDynamic,
    AlbumSub,
    AlbumSublist,
    Artists,
    ArtistAlbum,
    ArtistDesc,
    RecommendResource,
    RecommendSongs,
    MyLike,
    LikeList,
    AlbumNewest,
    TopArtists,
    Personalized,
    PersonalizedNewsong,
    TopList,
    TopLists,
    PersonalizedMv,
    ToplistArtist
}