<?php  

if(!defined('BASEPATH'))
	exit('No direct script access allowed');

class AgendaModel extends CI_Model {
	
	function __construct() {
		parent::__construct();
	}

	function get_agenda($id){
        //Inicio da montagem do select
        $this->db->select('res.id as id,
        res.title as title,
        res.pacient_id as pacient_id,
        res.description as description,
        res.doctor_id as doctor_id,
        res.created_at as created_at,
        user.name as nameUser');
        
        //Seta from
        $this->db->from('ls_calendar_event as res');

        $this->db->join('ls_user as user', 'user.id = res.pacient_id');

        $this->db->where('res.doctor_id', $id);
        //Seta o Join com a tabela de fotos

        //Executa a query
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


    function get_agenda_paciente($id){
        //Inicio da montagem do select
        $this->db->select('res.id as id,
        res.title as title,
        res.pacient_id as pacient_id,
        res.description as description,
        res.doctor_id as doctor_id,
        res.created_at as created_at,
        user.name as nameUser');
        
        //Seta from
        $this->db->from('ls_calendar_event as res');

        $this->db->join('ls_user as user', 'user.id = res.pacient_id');

        $this->db->where('res.pacient_id', $id);
        //Seta o Join com a tabela de fotos

        //Executa a query
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

