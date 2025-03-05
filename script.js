function calculateCompatibility() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    
    let score = Math.random() * 40 + 30; // Base 30-70%
    score += (name1.length - name2.length) * 2;
    score += (name1.charCodeAt(0) - name2.charCodeAt(0)) / 10;
    score += Math.abs(name1.length - 8) * 3;
    score = Math.min(100, Math.max(0, Math.round(score)));

    document.getElementById('result').style.display = 'block';
    document.getElementById('progress').style.width = score + '%';
    document.getElementById('score').textContent = score + '%';
    
    let message = '';
    let factors = [];
    const emoji = document.querySelector('.emoji');
    
    if (score < 30) {
        message = "🚨 Code Red! Better keep day jobs...";
        emoji.textContent = "💥";
        factors = ["Both allergic to morning meetings", "Competing for CEO title"];
    } else if (score < 70) {
        message = "📈 Potential Unicorns! Needs more coffee meetings";
        emoji.textContent = "🤔";
        factors = ["Mutual love for free snacks", "90% aligned on nap times"];
    } else {
        message = "🎉 Billion Dollar Duo! VC money incoming!";
        emoji.textContent = "🚀";
        factors = ["Synced caffeine addiction", "Matching spreadsheet aesthetics"];
    }

    document.getElementById('message').textContent = message;
    document.getElementById('factors').innerHTML = factors
        .map(f => `<li>${f}</li>`)
        .join('');
}
