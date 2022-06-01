import React from 'react';

export default function ConnectPage() {

    return (
        <div>
            <h2 style={{ marginTop: 100, marginLeft: 30, fontFamily: 'courierPrime, monospace'}}>[ connect with us. ]</h2>
            <div style={{ textAlign: 'center', padding: 200 }}>
              <a href="https://www.instagram.com/clubwestco">
              <i style={{ color: '#855723', fontSize: 120, padding: 40 }} class="bi bi-instagram"></i>
              </a>
              <a href="mailto:theclubwestco@gmail.com">
              <i style={{ color: '#855723', fontSize: 135, padding: 40 }} class="bi bi-envelope"></i>
              </a>
              <a href="https://mobile.twitter.com/clubwestco/with_replies">
              <i style={{ color: '#855723', fontSize: 135, padding: 40 }} class="bi bi-twitter"></i>
              </a>
              </div>
            </div>
        
    )
}