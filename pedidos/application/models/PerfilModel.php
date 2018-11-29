<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class PerfilModel extends CI_Model
{
   function __construct()
   {
        parent::__construct();
   }


  function get_perfil($id){
        //Inicio da montagem do select
        $this->db->select('res.id as id,
        res.name as nameuser,
        res.email as email,
        res.photo as photo,
        ud.about as about,
        ud.cellphone as cellphone,
        ud.type as type,
        ud.birthday as birthday,
        ud.cellphone as cellphone,
        ud.who_recommended as who_recommended,
        ar.name as name');
        
        //Seta from
        $this->db->from('ls_user as res');
        //Seta o Join com a tabela de fotos
        $this->db->join('ls_user_data as ud', 'res.id = ud.user_id');
        $this->db->join('ls_area as ar', 'ar.id = ud.area_id');
        //Executa a query

        $this->db->where('res.id', $id);
        $query = $this->db->get();
        //Verifica se retornou alguma informacao
        if ($query->num_rows() > 0)
        {
            $data = $query->result();
            //Retorna o resultado da query
            return $data;
        }
        else
            return array();
    }

}