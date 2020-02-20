import $ from 'jquery';
export const log = content => $('#content').append("<i style = 'color: black' class = 'fa fa-terminal'> </i>  " + content + "<br>" );
export const logTitle = title => $('#title').append(title);
