import axios from 'axios'
import resource from './resource'

export default {
    //获取轮播图
    getbanner(){
        return axios.get(resource.BannerList);
    },
    //获取推荐歌单
    getpersonalized(limit){
        let data = resource.Personalized + '?limit=' + limit;
        return axios.get(data);
    },
    //获取推荐的新音乐
    getnewsong(){
        let data = resource.PersonalizedNewsong;
        return axios.get(data);
    },
    //获取新的MV
    getnewmv(){
        let data = resource.PersonalizedMv;
        return axios.get(data);
    },
    //验证手机号是否已经注册
    getverifyphone(phone){
        let data = resource.VerifyPhone + '?phone=' + phone;
        return axios.get(data);
    },
    //手机登录
    getphonelogin(phone,password){
        let data = resource.PhoneLogin + '?phone=' + phone +'&password=' + password;
        window.console.log(data);
        return axios.get(data);
    },
    //获取用户的歌单
    getuserplaylist(uid){
        let data = resource.UserPlaylist + '?uid=' + uid;
        return axios.get(data);
    },
    //获取歌单详情
    getplaylistdetail(uid){
        let data = resource.PlaylistDetail + '?id=' + uid;
        return axios.get(data);
    },
    //获取歌曲详情
    getsongdetail(ids){
        let data = resource.SongDetail + '?ids=' + ids;
        return axios.get(data);
    }
}