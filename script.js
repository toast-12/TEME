document.getElementById('saveBtn').addEventListener('click', function() {
    const memoInput = document.getElementById('memo');
    const memoText = memoInput.value.trim();

    if (memoText) {
        const savedMemos = document.getElementById('savedMemos');
        const memoDiv = document.createElement('div');
        memoDiv.classList.add('memo');
        memoDiv.textContent = memoText;

        // 지우기 버튼 추가
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '지우기';
        deleteBtn.onclick = function() {
            savedMemos.removeChild(memoDiv);
        };

        memoDiv.appendChild(deleteBtn);
        savedMemos.appendChild(memoDiv);
        memoInput.value = ''; // 입력 필드 비우기
    } else {
        alert('메모를 입력하세요!');
    }
});

// 지우기 버튼 기능
document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('memo').value = ''; // 입력 필드 비우기
});

// 다운로드 기능
document.getElementById('downloadBtn').addEventListener('click', function() {
    const memoInput = document.getElementById('memo');
    const memoText = memoInput.value.trim();

    if (memoText) {
        const blob = new Blob([memoText], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'memo.txt';
        link.click();
    } else {
        alert('다운로드할 메모를 입력하세요!');
    }
});
