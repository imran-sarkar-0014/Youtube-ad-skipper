//ytp-ad-skip-button  == skip button
//ytp-ad-overlay-close-button == overlay ad close button


setInterval(() => {
    var skipButton = document.getElementsByClassName("ytp-ad-skip-button")
    var OverlayskipButton = document.getElementsByClassName("ytp-ad-overlay-close-button")

    if (skipButton != undefined && skipButton.length > 0) {
        console.log('Ad defined')
        skipButton[0].click()
    }

    if (OverlayskipButton != undefined && OverlayskipButton.length > 0) {
        console.log('Overlap Ad defined')
        OverlayskipButton[0].click()
    }


}, 3000)