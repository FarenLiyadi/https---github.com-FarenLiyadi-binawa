<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('biography_pelatihs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('nik')->nullable();
            $table->string('nama_lengkap')->nullable();
            $table->string('asal')->nullable();
            $table->string('tempat_lahir')->nullable();
            $table->date('tanggal_lahir')->nullable();
            $table->string('agama')->nullable();
            $table->string('pelatihan')->nullable();
            $table->string('club_terakhir')->nullable();
            $table->string('karier')->nullable();
            $table->string('ktp')->nullable();
            $table->string('bukti_pelatih')->nullable();
            $table->string('kk')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('biography_pelatih');
    }
};
