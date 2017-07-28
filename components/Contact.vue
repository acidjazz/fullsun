<template lang="pug">
.section.section_contact#contact
  .gradient
  .body
    .title contact us
    .subtitle Want more sungrown goodness?
    .signup

      form(action="https://full-sun.us15.list-manage.com/subscribe/post",method="POST")
        input(type="hidden",name="u",value="93106ad28f0d872fd3965373b")
        input(type="hidden",name="id",value="3fcc9b6313")

        .submit(onClick="javascript:document.forms[0].submit();")
          include ../static/vector/arrows.svg
        
        .input 
          input(type='text',placeholder='Add your email address',name='EMAIL')
      .clear

    .follow
      .title Follow Us
      .socials
        a.social.social_email(href='mailto:info@full-sun.com',target='new')
          include ../static/vector/email.svg
        a.social.social_instagram(href='https://www.instargam.com/fullsun_/',target='new')
          include ../static/vector/instagram.svg
        a.social.social_twitter(href='https://twitter.com/FullSun2',target='new')
          include ../static/vector/twitter.svg
        a.social.social_facebook(href='https://www.facebook.com/Full-Sun-648952271971685/',target='new')
          include ../static/vector/facebook.svg

    .bottom &copy; FULL SUN 2017 | DESIGNED BY <a href="http://www.designsakestudio.com" target="_new">DESIGNSAKE STUDIO</a> | &lt;/&gt; BY <a href="https://256.io/" target="_new">256</a>
</template>

<style lang="stylus">
json('../static/colors.json')
json('../static/fonts.json')
@import '../assets/stylus/mixins.styl'


.section_contact
  background-image url('/images/road.jpg')
  background-size cover
  background-position center
  > .gradient
    z-index 1
    position absolute
    fullsize()
    background linear-gradient(rgba(tiffanyBlue, 0.55), rgba(seaBuckthorn, 0.55))
  > .body
    z-index 2
    color white
    text-align center
    position absolute
    fullsize()
    color white
    > .title
      font h1
      padding 60px 0 0 0
    > .subtitle
      font c1
      padding 60px 0 30px 0 
      letter-spacing 1px
    > .signup
      width 460px
      margin auto
      border 3px solid white
      > form
        > .input
          width 400px
          > input
            &:focus
              outline 1px solid rgba(white, 0.5)
            width 300px
            height 30px
            padding 5px 20px
            font c1s
            margin 5px 0 0 0
            background-color transparent
            color white
            border none
            &::-webkit-input-placeholder
              color white
              font c1s
        > .submit
          cursor pointer
          float right
          width 60px
          border-left 3px solid white
          > svg
            width 40px
            height 40px
            margin 5px 0 0 0
            > polygon
              fill white
    > .follow
      padding 40px 0 0 0
      width 300px
      margin auto
      > .title
        font c1
        padding 0 0 20px 0
      > .socials
        > .social
          width 30px
          height 30px
          display inline-block
          margin 0 20px
          &:hover > svg
            > path, > circle
              fill seaBuckthorn

          > svg
            width inherit
            height inherit
            > path, > circle
              fill white
              transition 0.5s ease-in-out 0s
    > .bottom
      left 50%
      bottom 0
      margin-left -270px
      position absolute
      width 460px

      background-color springWood
      padding 15px 40px
      color seaBuckthorn
      font c6
      letter-spacing 2px
      > a
        color seaBuckthorn

@media all and (min-width: 1px) and (max-width: 1000px)
  .section_contact
    height 660px
    > .body
      > .bottom
        left 0%
        margin-left 0
        width calc(100% - 40px)
        font c6
        padding 15px 20px
      > .signup
        width 300px
        > form
          > .input
            width 200px
            > input
              width 150px
</style>
