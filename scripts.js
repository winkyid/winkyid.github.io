function addNotification(type, title, description) {
    const notifArea = document.getElementById('notification-area');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    let icon;
    switch (type) {
        case 'success':
            icon = 'bi bi-check-circle';
            break;
        case 'error':
            icon = 'bi bi-exclamation-circle';
            break;
        case 'info':
            icon = 'bi bi-info-circle';
            break;
        case 'warning':
            icon = 'bi bi-exclamation-triangle';
            break;
    }

    notification.innerHTML = `<i class="${icon}"></i><div><strong>${title}</strong><p>${description}</p></div>`;
    notifArea.appendChild(notification);

    setTimeout(() => {
        notifArea.removeChild(notification);
    }, 5000);
}

// Script for showing and closing details
function showDetails(day) {
    const detailBox = document.getElementById('schedule-detail');
    const dayTitle = document.getElementById('day-title');
    const scheduleInfo = document.getElementById('schedule-info');

    // Update the title and info based on the day
    if (day === 'monday') {
        dayTitle.innerText = 'Detail Jadwal - Senin';
        scheduleInfo.innerHTML = `
            <p>Deskripsi, Info senin mata kuliah ada 2 dan jadwal bisa aja berubah2.</p>
            <hr>
            <table>
                <tr>
                    <td>Mata Kuliah</td>
                    <td>:<strong> Analisa & Desain AI</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> 233WP07228</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> 08.30 - 10.30</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> M.Ziaurrahman, S.Kom., M.Kom</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> 3</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> A</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> 3</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> D.308</td>
                </tr>
            </table>
            <hr>
            <table>
                <tr>
                    <td>Mata Kuliah</td>
                    <td>:<strong> Matematika Diskrit</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> 233WP07230</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> 13.00 - 15.30</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> Devi Yuliantina,SE.,ME</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> 2</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> A</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> 3</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> D.210</td>
                </tr>
            </table>
            <p></p>
        `;
    } else if (day === 'tuesday') {
        dayTitle.innerText = 'Detail Jadwal - Selasa';
        scheduleInfo.innerHTML = `
            <p>Deskripsi, Info selasa mata kuliah ada 2 dan jadwal bisa aja berubah2.</p>
            <hr>
            <table>
                <tr>
                    <td>Mata Kuliah</td>
                    <td>:<strong> Jaringan Komputer</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> 233WP07225</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> 09.00 - 11.00</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> M.Ziaurrahman, S.Kom., M.Kom</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> 3</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> A</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> 3</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> D..310</td>
                </tr>
            </table>
            <hr>
            <table>
                <tr>
                    <td>Mata Kuliah</td>
                    <td>:<strong> Ilmu Sosial Budaya Dasar</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> 233WI00003</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> 12.30 - 14.30</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> Muh.Azhari.,S.Pd., M,Si</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> 3</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> A</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> 3</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> D.308</td>
                </tr>
            </table>
            <p></p>
        `;
    } else if (day === 'wednesday') {
        dayTitle.innerText = 'Detail Jadwal - Rabu';
        scheduleInfo.innerHTML = `
            <p>Deskripsi, Info rabu mata kuliah ada 2 dan jadwal bisa aja berubah2.</p>
            <hr>
            <table>
                <tr>
                    <td>Mata Kuliah</td>
                    <td>:<strong> Pemrogaman Web</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> 233WP07226</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> 13.00 - 15.00</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> Miftahurrizqi ,S.Kom.,M.Kom</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> 3</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> A</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> 3</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> Lab 2</td>
                </tr>
            </table>
            <hr>
            <table>
                <tr>
                    <td>Mata Kuliah</td>
                    <td>:<strong> Praktikum Pemrogaman Web</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> 233WP07227</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> 13.00 - 15.00</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> Miftahurrizqi ,S.Kom.,M.Kom</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> 1</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> A</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> 3</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> Lab 2</td>
                </tr>
            </table>
            <p></p>
        `;
    } else if (day === 'thursday') {
        dayTitle.innerText = 'Detail Jadwal - Kamis';
        scheduleInfo.innerHTML = `
            <p>Deskripsi, Info kamis mata kuliah ada - dan jadwal bisa aja berubah2.</p>
            <hr>
            <table>
                <tr>
                    <td>Mata Kuliah</td>
                    <td>:<strong> Pancasila</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> 233WU00003</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> 07.00 - selesai</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> Ahyar Junaedi S.E,M.M</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> 2</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> A</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> 3</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> D.210</td>
                </tr>
            </table>
            <hr>
            <table>
                <tr>
                    <td>Mata Kuliah</td>
                    <td>:<strong> nama matkul</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> 2</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> (kosong)</td>
                </tr>
            </table>
            <p></p>
        `;
    } else if (day === 'friday') {
        dayTitle.innerText = 'Detail Jadwal - Jum`at';
        scheduleInfo.innerHTML = `
            <p>Deskripsi, Info senin mata kuliah ada 2 dan jadwal bisa aja berubah2.</p>
            <hr>
            <table>
                <tr>
                    <td>Mata Kuliah</td>
                    <td>:<strong> Kemuhammadiyahan III</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> 233WI00002</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> 07.00 - 08.40</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> Dr.HM. Yamin Muhtar, Lc.,M.Pd.I</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> 2</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> A</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> 3</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> Aula Kampus III</td>
                </tr>
            </table>
            <hr>
            <table>
                <tr>
                    <td>Mata Kuliah</td>
                    <td>:<strong> Audit Sistem Informasi</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> 233WP07229</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> 13.00 - 14.30</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> Ika Safitri Windiarti, ST., M.Eng</td>
                </tr>
                <tr>
                    <td></td>
                    <td style="color:#fff;">:<strong style="color:#000;"> (Adv)., PhD</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> 2</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> A</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> 3</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> D.308</td>
                </tr>
            </table>
            <p></p>
        `;
    } else if (day === 'saturday') {
        dayTitle.innerText = 'Detail Jadwal - Sabtu';
        scheduleInfo.innerHTML = `
            <p>Deskripsi, Info senin mata kuliah ada 2 dan jadwal bisa aja berubah2.</p>
            <hr>
            <table>
                <tr>
                    <td>Mata Kuliah</td>
                    <td>:<strong> nama matkul</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> 2</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> (kosong)</td>
                </tr>
            </table>
            <hr>
            <table>
                <tr>
                    <td>Mata Kuliah</td>
                    <td>:<strong> nama matkul</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> 2</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> (kosong)</td>
                </tr>
            </table>
            <p></p>
        `;
    } else if (day === 'Pengumuman') {
        dayTitle.innerText = 'Pengumuman';
        scheduleInfo.innerHTML = `
            <p>No ingfo cui</p>
            <hr>
            <table>
                <tr>
                    <td>Mata Kuliah</td>
                    <td>:<strong> nama matkul</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> null</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> (kosong)</td>
                </tr>
            </table>
            <hr>
            <table>
                <tr>
                    <td>Mata Kuliah</td>
                    <td>:<strong> nama matkul</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> null</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> (kosong)</td>
                </tr>
            </table>
            <p></p>
        `;
    } else if (day === 'aboutme') {
        dayTitle.innerText = 'Tentang Saya';
        scheduleInfo.innerHTML = `
            <p>Uji Coba</p>
            <hr>
            <table>
                <tr>
                    <td>Developer</td>
                    <td>:<strong> Winky Kurniatama</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> null</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> (kosong)</td>
                </tr>
            </table>
            <hr>
            <table>
                <tr>
                    <td>Mata Kuliah</td>
                    <td>:<strong> nama matkul</td>
                </tr>
                <tr>
                    <td>Kode Matkul</td>
                    <td>:<strong> null</td>
                </tr>
                <tr>
                    <td>Waktu</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Dosen</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>SKS</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>:<strong> (kosong)</td>
                </tr>
                <tr>
                    <td>Ruangan</td>
                    <td>:<strong> (kosong)</td>
                </tr>
            </table>
            <p></p>
        `;
    }
    // Add more else-if blocks for other days
    
    detailBox.classList.add('active');
}

function closeDetails() {
    const detailBox = document.getElementById('schedule-detail');
    detailBox.classList.remove('active');
}

function closebox() {
    var x = document.getElementById('box-welcome');
    x.style.display === "none";
}

//notifikasi section trigger data:
function warnbeta() {
    addNotification('warning', 'Fitur Belom di terapkan eay', 'Kemungkinan sih masih dalam pengembangan!.');
}
// Example usage notification for trigger:
//addNotification('success', 'Jadwal Berhasil Ditambahkan', 'Jadwal Anda berhasil disimpan.');
//addNotification('error', 'Gagal Menambahkan Jadwal', 'Terjadi kesalahan saat menyimpan.');
//addNotification('info', 'Info Jadwal', 'Hari ini Anda tidak ada kelas.');
//addNotification('warning', 'Peringatan Jadwal', 'Ada perubahan pada jadwal kelas.');
