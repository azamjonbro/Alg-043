<template>
    <header>
        <div class="logobox">
            <a href="#">{{logo}}</a>
        </div>
        <ul class="header__list">
            <li class="header_item">
                <a href="#" class="header__item-link">item 1</a>
            </li>
            <li class="header_item">
                <a href="#" class="header__item-link">item 2</a>
            </li>
            <li class="header_item">
                <a href="#" class="header__item-link">item 3</a>
            </li>
            <li class="header_item">
                <a href="#" class="header__item-link">item 4</a>
            </li>
            <li class="header_item">
                <a href="#" class="header__item-link">item 5</a>
            </li>
        </ul>
        <u>
            {{title}}
        </u>
         
    </header>
</template>
<script>
export default {
    props:{
        logo:{
            type:String,
            default:"Default text",
            // default:[]
        },
        title:{
            type:String,
            required:true
        },
        count:{
            type:Number,
            default:0
        }
    }
};
</script>
