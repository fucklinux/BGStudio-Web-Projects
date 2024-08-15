import { css } from 'lit';
export const style = css `:host{--shape-corner:var(--mdui-shape-corner-large);--z-index:2200;display:none;position:fixed;top:0;bottom:0;left:0;z-index:1;width:22.5rem}:host([placement=right]){left:initial;right:0}:host([mobile]),:host([modal]){top:0!important;right:0;bottom:0!important;width:initial;z-index:var(--z-index)}:host([placement=right][mobile]),:host([placement=right][modal]){left:0}:host([contained]){position:absolute}.overlay{position:absolute;inset:0;z-index:inherit;background-color:rgba(var(--mdui-color-scrim),.4)}.panel{display:block;position:absolute;top:0;bottom:0;left:0;width:100%;overflow:auto;z-index:inherit;background-color:rgb(var(--mdui-color-surface));box-shadow:var(--mdui-elevation-level0)}:host([mobile]) .panel,:host([modal]) .panel{border-radius:0 var(--shape-corner) var(--shape-corner) 0;max-width:80%;width:22.5rem;background-color:rgb(var(--mdui-color-surface-container-low));box-shadow:var(--mdui-elevation-level1)}:host([placement=right]) .panel{left:initial;right:0}:host([placement=right][mobile]) .panel,:host([placement=right][modal]) .panel{border-radius:var(--shape-corner) 0 0 var(--shape-corner)}`;
