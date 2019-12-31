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
    }
}