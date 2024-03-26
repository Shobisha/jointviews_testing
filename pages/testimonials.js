import Head from 'next/head'
import React from 'react'

const testimonials = () => {
  return (
    <>
    <Head>
      <title>Jointviews Content Marketing Agency | Testimonials</title>
     
    </Head> 
  <div className='maincontent'>
    <div className='contentarea'> 
    <article id="post-326" className="hentrydo">
          <header className="entryheaderdo">
              <h1 className="entrytitledo">Testimonials</h1>
          </header>
          <div className="entrycontentdo">
              {/* <p>[testimonials_slider carousel_count=2 slide_margin=50 transition_mode=vertical show_controls=true show_pager=true show_start_stop=true]</p> */}
          </div>
      </article>
    </div>
  </div>
  <div id="comments" className="commentsareado">
          <div id="respond" className="commentresponddo">
              <h3 id="reply-title" className="commentreplytitle hthree">Leave a Reply <small className='smalldo'>
                  <a rel="nofollow" id="cancel-comment-reply-link" href="/download-e-book/#respond" className='ado'>Cancel reply</a></small></h3>
              <form action="https://www.jointviews.com/wp-comments-post.php" method="post" id="commentform" className="comment-form" noValidate>
                  <p className="commentnotesdo">
                      <span id="email-notes">Your email address will not be published.</span> 
                      <span className="required-field-message">Required fields are marked <span className="requireddo">*</span></span>
                  </p>
                  <p className="commentformcomment ">
                      <label htmlFor="comment" className='labeldo'>Comment <span className="requireddo">*</span></label> 
                      <textarea id="comment" name="comment" cols="45" rows="8" maxLength="65525" className='teaxtareado' required></textarea>
                  </p>
                  <p className="commentformauthor">
                      <label htmlFor="author" className='labeldo'>Name <span className="requireddo">*</span></label> 
                      <input id="author" name="author" type="text" value="" size="30" maxLength="245" autoComplete="name" className='inputdo' required />
                  </p>
                  <p className="commentformemail">
                      <label htmlFor="email" className='labeldo'>Email <span className="requireddo">*</span></label> 
                      <input id="email" name="email" type="email" value="" size="30" maxLength="100" aria-describedby="email-notes" autoComplete="email" className='inputdo' required />
                  </p>
                  <p className="commentformurl">
                      <label htmlFor="url" className='labeldo'>Website</label> 
                      <input id="url" name="url" type="url" value="" size="30" maxLength="200" autoComplete="url" className='inputdo'/>
                  </p>
                  <p className="form-submit psubbtn">
                      <input name="submit" type="submit" id="submit" className="subbtndo" value="Post Comment" /> 
                      <input type="hidden" name="comment_post_ID" value="326" id="comment_post_ID" className='inputdo'/>
                      <input type="hidden" name="comment_parent" id="comment_parent" value="0" className='inputdo' />
                  </p>
                  {/* <p style={{display: 'none !important'}} className="akismet-fields-container psubbtn" data-prefix="ak_">
                      <label className='labeldo'>Δ<textarea name="ak_hp_textarea" cols="45" rows="8" maxLength="100" className='textareado'></textarea></label>
                      <input type="hidden" id="ak_js_1" name="ak_js" value="1710479414577" className='inputdo' />
                  </p> */}
              </form>
          </div>
      </div>  
  </>
  )
}

export default testimonials
