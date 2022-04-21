import React from "react";

export interface ButtonProps{
    label:string;
    icon?:string;
    onClick:React.MouseEventHandler<HTMLDivElement>;
}