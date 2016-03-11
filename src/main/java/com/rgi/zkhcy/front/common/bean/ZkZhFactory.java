// Copyright (C) 2012-2015 JIEZHI All rights reserved
package com.rgi.zkhcy.front.common.bean;


import com.rgi.zkhcy.front.common.common.persistence.BaseEntity;

/** 
 * 类 名: ZkZhFactory <br/>
 * 描 述: 描述类完成的主要功能 <br/>
 * 作 者: who <br/>
 * 创 建： date <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
public class ZkZhFactory extends BaseEntity<ZkZhFactory> {

	private static final long serialVersionUID = 1L;
		private java.lang.String id;//   
	private java.lang.String menu_id;//   工厂名字--关联菜单
	private java.lang.String proname;//   项目名称
	private java.lang.String constructorunit;//   建设单位
	private java.lang.String constructorsite;//   建设地点
	private java.lang.String constructionscale;//   建设规模
	private java.lang.String profinance;//   项目投资
	private java.lang.String prostatus;//   项目状态
	private java.lang.String mainpro;//   主要产品
	private java.lang.Integer currorder;//   排序
	private java.lang.Integer status;//   状态：0，无效；1，有效；2，删除。
	private java.lang.String adduser;//   
	private java.sql.Timestamp addtime;//   
	private java.lang.String upduser;//   
	private java.sql.Timestamp updtime;//   
	private java.lang.String pic_src;//   
	private java.lang.Object content;//   图文信息
	private java.lang.String picsrcs;//   图片展示
	private java.lang.String assum;//   承担工作-内容
	private java.lang.Integer isprofile;//   是否首页展示，0:不展示，1展示
	private java.lang.String pictitle;//   
	private java.lang.String picpic;//   
	private java.lang.String piccontent;// 
	
	private java.lang.String menu_name;//   工厂名字--关联菜单
	
	public java.lang.String getMenu_name() {
		return menu_name;
	}
	public void setMenu_name(java.lang.String menu_name) {
		this.menu_name = menu_name;
	}
	public java.lang.String getId() {
		return id;
	}
	public void setId(java.lang.String id) {
		this.id = id;
	}
	public java.lang.String getMenu_id() {
		return menu_id;
	}
	public void setMenu_id(java.lang.String menu_id) {
		this.menu_id = menu_id;
	}
	public java.lang.String getProname() {
		return proname;
	}
	public void setProname(java.lang.String proname) {
		this.proname = proname;
	}
	public java.lang.String getConstructorunit() {
		return constructorunit;
	}
	public void setConstructorunit(java.lang.String constructorunit) {
		this.constructorunit = constructorunit;
	}
	public java.lang.String getConstructorsite() {
		return constructorsite;
	}
	public void setConstructorsite(java.lang.String constructorsite) {
		this.constructorsite = constructorsite;
	}
	public java.lang.String getConstructionscale() {
		return constructionscale;
	}
	public void setConstructionscale(java.lang.String constructionscale) {
		this.constructionscale = constructionscale;
	}
	public java.lang.String getProfinance() {
		return profinance;
	}
	public void setProfinance(java.lang.String profinance) {
		this.profinance = profinance;
	}
	public java.lang.String getProstatus() {
		return prostatus;
	}
	public void setProstatus(java.lang.String prostatus) {
		this.prostatus = prostatus;
	}
	public java.lang.String getMainpro() {
		return mainpro;
	}
	public void setMainpro(java.lang.String mainpro) {
		this.mainpro = mainpro;
	}
	public java.lang.Integer getCurrorder() {
		return currorder;
	}
	public void setCurrorder(java.lang.Integer currorder) {
		this.currorder = currorder;
	}
	public java.lang.Integer getStatus() {
		return status;
	}
	public void setStatus(java.lang.Integer status) {
		this.status = status;
	}
	public java.lang.String getAdduser() {
		return adduser;
	}
	public void setAdduser(java.lang.String adduser) {
		this.adduser = adduser;
	}
	public java.sql.Timestamp getAddtime() {
		return addtime;
	}
	public void setAddtime(java.sql.Timestamp addtime) {
		this.addtime = addtime;
	}
	public java.lang.String getUpduser() {
		return upduser;
	}
	public void setUpduser(java.lang.String upduser) {
		this.upduser = upduser;
	}
	public java.sql.Timestamp getUpdtime() {
		return updtime;
	}
	public void setUpdtime(java.sql.Timestamp updtime) {
		this.updtime = updtime;
	}
	public java.lang.String getPic_src() {
		return pic_src;
	}
	public void setPic_src(java.lang.String pic_src) {
		this.pic_src = pic_src;
	}
	public java.lang.Object getContent() {
		return content;
	}
	public void setContent(java.lang.Object content) {
		this.content = content;
	}
	public java.lang.String getPicsrcs() {
		return picsrcs;
	}
	public void setPicsrcs(java.lang.String picsrcs) {
		this.picsrcs = picsrcs;
	}
	public java.lang.String getAssum() {
		return assum;
	}
	public void setAssum(java.lang.String assum) {
		this.assum = assum;
	}
	public java.lang.Integer getIsprofile() {
		return isprofile;
	}
	public void setIsprofile(java.lang.Integer isprofile) {
		this.isprofile = isprofile;
	}
	public java.lang.String getPictitle() {
		return pictitle;
	}
	public void setPictitle(java.lang.String pictitle) {
		this.pictitle = pictitle;
	}
	public java.lang.String getPicpic() {
		return picpic;
	}
	public void setPicpic(java.lang.String picpic) {
		this.picpic = picpic;
	}
	public java.lang.String getPiccontent() {
		return piccontent;
	}
	public void setPiccontent(java.lang.String piccontent) {
		this.piccontent = piccontent;
	}
	
}