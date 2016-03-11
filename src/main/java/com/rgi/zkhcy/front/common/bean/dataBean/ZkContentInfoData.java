package com.rgi.zkhcy.front.common.bean.dataBean;

@SuppressWarnings("rawtypes")
public class ZkContentInfoData {
	
	private java.lang.String id;//   
	private java.lang.String title;//      
	private java.lang.Object content;//     
	private java.lang.String long_title;//    
	private java.lang.Integer contorder;//     
	private java.lang.String newsfrom;//      
	private java.lang.String pic_src;//
	
	private java.lang.String publicTime;// 
	
	private String indexPic;
	
	private Short isTop;//是否置顶
	
	private String groupPic;//组图
	
	private String menu_id;//菜单id
	private String menuName;//菜单名称
	
	public String getMenu_id() {
		return menu_id;
	}
	public void setMenu_id(String menu_id) {
		this.menu_id = menu_id;
	}
	public String getMenuName() {
		return menuName;
	}
	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}
	public Short getIsTop() {
		return isTop;
	}
	public void setIsTop(Short isTop) {
		this.isTop = isTop;
	}
	public String getGroupPic() {
		return groupPic;
	}
	public void setGroupPic(String groupPic) {
		this.groupPic = groupPic;
	}
	public String getIndexPic() {
		return indexPic;
	}
	public void setIndexPic(String indexPic) {
		this.indexPic = indexPic;
	}
	public java.lang.String getPublicTime() {
		return publicTime;
	}
	public void setPublicTime(java.lang.String publicTime) {
		this.publicTime = publicTime;
	}
	private java.util.List imgList;
	
	public java.lang.String getId() {
	    return this.id;
	}
	public void setId(java.lang.String id) {
	    this.id=id;
	}
	public java.lang.String getTitle() {
	    return this.title;
	}
	public void setTitle(java.lang.String title) {
	    this.title=title;
	}
	public java.lang.Object getContent() {
	    return this.content;
	}
	public void setContent(java.lang.Object content) {
	    this.content=content;
	}
	public java.lang.String getLong_title() {
	    return this.long_title;
	}
	public void setLong_title(java.lang.String long_title) {
	    this.long_title=long_title;
	}
	public java.lang.Integer getContorder() {
	    return this.contorder;
	}
	public void setContorder(java.lang.Integer contorder) {
	    this.contorder=contorder;
	}
	public java.lang.String getNewsfrom() {
	    return this.newsfrom;
	}
	public void setNewsfrom(java.lang.String newsfrom) {
	    this.newsfrom=newsfrom;
	}
	public java.lang.String getPic_src() {
	    return this.pic_src;
	}
	public void setPic_src(java.lang.String pic_src) {
	    this.pic_src=pic_src;
	}
	
	public java.util.List getImgList() {
		return imgList;
	}
	public void setImgList(java.util.List imgList) {
		this.imgList = imgList;
	}
	
}
